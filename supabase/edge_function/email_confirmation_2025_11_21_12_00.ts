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
    const { email, country, type = 'waitlist' } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Helper function to determine from email
    function getFromEmail() {
      const domain = Deno.env.get('RESEND_DOMAIN');
      if (domain) {
        return `send@${domain}`;
      }
      return 'onboarding@resend.dev'; // Default fallback
    }

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

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: [email],
        subject: emailSubject,
        html: emailBody,
        text: emailBody.replace(/<[^>]*>/g, '') // Strip HTML for text version
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send confirmation email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Confirmation email sent successfully',
        message_id: result.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in email confirmation function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});