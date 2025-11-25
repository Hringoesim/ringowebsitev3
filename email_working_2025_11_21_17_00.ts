import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('Email confirmation function called');
    
    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { email, country, type = 'waitlist' } = requestBody;

    if (!email) {
      console.log('No email provided');
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Use the provided Resend API key
    const resendApiKey = 're_aZstxiZg_3pZqhoLwrb7wvhopdinibEi2';
    console.log('Using provided Resend API key');

    // Helper function to determine from email
    function getFromEmail() {
      const domain = Deno.env.get('RESEND_DOMAIN');
      if (domain) {
        return `send@${domain}`;
      }
      return 'onboarding@resend.dev'; // Default fallback
    }

    const fromEmail = getFromEmail();
    console.log('From email:', fromEmail);

    // Send confirmation email to user
    const emailSubject = type === 'waitlist' 
      ? 'Welcome to Ringo Waitlist!' 
      : 'Thank you for contacting Ringo';
    
    const emailBody = type === 'waitlist' 
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff6b35, #f7931e, #ec4899); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px;">Welcome to Ringo!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">One Number. One Plan. Everywhere.</p>
          </div>
          
          <div style="padding: 40px 20px; background: white;">
            <h2 style="color: #333; margin-bottom: 20px;">Thank you for joining our waitlist!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              We're excited to have you on board as we prepare to launch Ringo - the revolutionary way to stay connected globally using your existing phone number.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #ff6b35; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666; line-height: 1.6;">
                <li>You'll be among the first to know when Ringo launches</li>
                <li>Early access to special pricing and features</li>
                <li>Updates on our progress and new developments</li>
                <li>Priority customer support when we go live</li>
              </ul>
            </div>
            
            ${country ? `<p style="color: #666; line-height: 1.6;"><strong>Your selected country:</strong> ${country}</p>` : ''}
            
            <p style="color: #666; line-height: 1.6;">
              Stay connected globally without changing your number. That's the Ringo promise.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true" 
                 style="background: #0077b5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Follow us on LinkedIn
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px;">
            <p>Questions? Reply to this email or contact us at info@ringoesim.com</p>
            <p>© 2025 Ringo. All rights reserved.</p>
          </div>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff6b35, #f7931e, #ec4899); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px;">Thank You!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">We received your message</p>
          </div>
          
          <div style="padding: 40px 20px; background: white;">
            <h2 style="color: #333; margin-bottom: 20px;">We'll be in touch soon!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to Ringo. We've received your message and our team will get back to you as soon as possible.
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to follow our progress on LinkedIn or check out our website for the latest updates.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.linkedin.com/company/ringoesim/?viewAsMember=true" 
                 style="background: #0077b5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Follow us on LinkedIn
              </a>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px;">
            <p>Questions? Reply to this email or contact us at info@ringoesim.com</p>
            <p>© 2025 Ringo. All rights reserved.</p>
          </div>
        </div>
      `;

    console.log('Sending email to:', email);
    console.log('Subject:', emailSubject);

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: emailSubject,
        html: emailBody,
        text: emailBody.replace(/<[^>]*>/g, '') // Strip HTML for text version
      })
    });

    console.log('Resend API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send confirmation email',
          details: errorText,
          status: response.status 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    // Send notification to info@ringoesim.com
    const notificationSubject = type === 'waitlist' 
      ? 'New Waitlist Signup - Ringo'
      : 'New Contact Form Submission - Ringo';
    
    const notificationBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New ${type === 'waitlist' ? 'Waitlist Signup' : 'Contact Form Submission'}</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Email:</strong> ${email}</p>
          ${country ? `<p><strong>Country:</strong> ${country}</p>` : ''}
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
        
        <p style="color: #666;">This notification was automatically generated from the Ringo website.</p>
      </div>
    `;

    // Send notification email
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: ['info@ringoesim.com'],
        subject: notificationSubject,
        html: notificationBody,
        text: notificationBody.replace(/<[^>]*>/g, '') // Strip HTML for text version
      })
    });

    console.log('Notification email response status:', notificationResponse.status);
    
    if (!notificationResponse.ok) {
      console.error('Failed to send notification email:', notificationResponse.status);
      // Don't fail the main request if notification fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Confirmation email sent successfully',
        message_id: result.id,
        email: email,
        country: country
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in email confirmation function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});