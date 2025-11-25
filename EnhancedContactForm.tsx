import React, { useState, useCallback, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle, AlertCircle, Send, User, Mail, MessageSquare, Clock, Shield } from "lucide-react";
import { LoadingState, ProgressIndicator } from './LoadingStates';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitProgress, setSubmitProgress] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [charCount, setCharCount] = useState(0);

  // Auto-save draft to localStorage
  useEffect(() => {
    const savedDraft = localStorage.getItem('ringo-contact-draft');
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        setFormData(draft);
        setCharCount(draft.message?.length || 0);
      } catch (e) {
        console.warn('Failed to load draft:', e);
      }
    }
  }, []);

  // Save draft on form changes
  useEffect(() => {
    if (formData.name || formData.email || formData.message) {
      localStorage.setItem('ringo-contact-draft', JSON.stringify(formData));
    }
  }, [formData]);

  // Clear draft on successful submission
  useEffect(() => {
    if (submitStatus === 'success') {
      localStorage.removeItem('ringo-contact-draft');
    }
  }, [submitStatus]);

  // Real-time validation
  const validateField = useCallback((field: string, value: string) => {
    const errors: Record<string, string> = {};
    
    switch (field) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required';
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = 'Please enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters';
        else if (value.trim().length > 1000) errors.message = 'Message must be less than 1000 characters';
        break;
    }
    
    setFieldErrors(prev => ({ ...prev, [field]: errors[field] || '' }));
    return !errors[field];
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }

    // Clear previous error and validate
    setFieldErrors(prev => ({ ...prev, [name]: '' }));
    setTimeout(() => validateField(name, value), 500);
  }, [validateField]);

  const simulateProgress = useCallback(() => {
    setSubmitProgress(0);
    const interval = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
    return interval;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus('idle');
    setStatusMessage('');
    
    // Validate all fields
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const messageValid = validateField('message', formData.message);

    if (!nameValid || !emailValid || !messageValid) {
      setSubmitStatus('error');
      setStatusMessage('Please fix the errors above before submitting.');
      return;
    }

    setIsSubmitting(true);
    const progressInterval = simulateProgress();

    try {
      console.log('Submitting contact form:', formData);

      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('contact_working_2025_11_22_18_00', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      clearInterval(progressInterval);
      setSubmitProgress(100);

      console.log('Edge function response:', { data, error });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message || 'Failed to submit contact form');
      }

      if (data && data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setCharCount(0);
        setFieldErrors({});
      } else {
        throw new Error(data?.error || 'Failed to submit contact form');
      }

    } catch (error: any) {
      console.error('Contact form submission error:', error);
      clearInterval(progressInterval);
      setSubmitProgress(0);
      setSubmitStatus('error');
      setStatusMessage(
        error.message || 
        'Failed to send your message. Please try again or email us directly at info@ringoesim.com'
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitProgress(0), 2000);
    }
  };

  const getFieldIcon = (field: string) => {
    switch (field) {
      case 'name': return <User className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'message': return <MessageSquare className="h-4 w-4" />;
      default: return null;
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && 
                     !fieldErrors.name && !fieldErrors.email && !fieldErrors.message;

  return (
    <Card className={`w-full max-w-2xl mx-auto shadow-xl border-0 ${className}`}>
      <CardHeader className="bg-gradient-to-r from-orange-50 to-pink-50">
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <Send className="h-6 w-6 text-orange-500" />
          Contact Us
        </CardTitle>
        <p className="text-center text-gray-600">
          Have questions about Ringo? We'd love to hear from you!
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="outline" className="text-green-600 border-green-600">
            <Clock className="h-3 w-3 mr-1" />
            24h Response
          </Badge>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            <Shield className="h-3 w-3 mr-1" />
            Secure
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              {getFieldIcon('name')}
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              disabled={isSubmitting}
              className={`w-full transition-all duration-200 ${
                fieldErrors.name 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : formData.name && !fieldErrors.name
                  ? 'border-green-500 focus:ring-green-500 focus:border-green-500'
                  : 'focus:ring-orange-500 focus:border-orange-500'
              }`}
            />
            {fieldErrors.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.name}
              </p>
            )}
            {formData.name && !fieldErrors.name && (
              <p className="text-sm text-green-600 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Looks good!
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              {getFieldIcon('email')}
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
              className={`w-full transition-all duration-200 ${
                fieldErrors.email 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : formData.email && !fieldErrors.email
                  ? 'border-green-500 focus:ring-green-500 focus:border-green-500'
                  : 'focus:ring-orange-500 focus:border-orange-500'
              }`}
            />
            {fieldErrors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.email}
              </p>
            )}
            {formData.email && !fieldErrors.email && (
              <p className="text-sm text-green-600 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Valid email address
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span className="flex items-center gap-2">
                {getFieldIcon('message')}
                Message *
              </span>
              <span className={`text-xs ${charCount > 1000 ? 'text-red-500' : 'text-gray-500'}`}>
                {charCount}/1000
              </span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your question, feedback, or how we can help you..."
              required
              disabled={isSubmitting}
              rows={5}
              className={`w-full resize-none transition-all duration-200 ${
                fieldErrors.message 
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                  : formData.message && !fieldErrors.message
                  ? 'border-green-500 focus:ring-green-500 focus:border-green-500'
                  : 'focus:ring-orange-500 focus:border-orange-500'
              }`}
            />
            {fieldErrors.message && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.message}
              </p>
            )}
            {formData.message && !fieldErrors.message && (
              <p className="text-sm text-green-600 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Message looks good
              </p>
            )}
          </div>

          {/* Progress Bar */}
          {isSubmitting && (
            <div className="space-y-2">
              <ProgressIndicator 
                progress={submitProgress} 
                message="Sending your message..."
                showPercentage={false}
              />
            </div>
          )}

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-800 font-medium">Message sent successfully!</p>
                <p className="text-green-700 text-sm mt-1">{statusMessage}</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">Failed to send message</p>
                <p className="text-red-700 text-sm mt-1">{statusMessage}</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className={`w-full py-3 font-semibold transition-all duration-200 ${
              isFormValid 
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 hover:scale-[1.02] shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message 📨
              </>
            )}
          </Button>

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span>Auto-saving draft...</span>
            </div>
          )}

          {/* Alternative Contact */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-gray-600">
              Or email us directly at{' '}
              <a 
                href="mailto:info@ringoesim.com" 
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                info@ringoesim.com
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              We typically respond within 24 hours during business days
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;