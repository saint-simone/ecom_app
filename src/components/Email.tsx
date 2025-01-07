"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SubscriptionStatus = 'idle' | 'subscribing' | 'success' | 'error';

interface EmailSignupProps {
  onSubmit?: (email: string) => Promise<void>;
  className?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ 
  onSubmit,
  className = ''
}) => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<SubscriptionStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setStatus('subscribing');
      
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Example API call - replace with your actual endpoint
        // await fetch('/api/subscribe', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ email }),
        // });
      }
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      console.error('Subscription error:', error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-gray-100 h-auto pt-10 pb-8">
      <Card className={`w-full max-w-md mx-auto ${className}`.trim()}>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Want First Dibs?</h2>
              <p className="text-gray-600 text-sm mb-4">
                Join our email list and be the first to know about new limited edition products,
                material innovations, and lots of other fun updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="flex-grow"
                  aria-label="Email address"
                />
                <Button 
                  type="submit"
                  disabled={status === 'subscribing'}
                  className="whitespace-nowrap"
                  aria-busy={status === 'subscribing'}
                >
                  {status === 'subscribing' ? 'Signing up...' : 'SIGN UP'}
                </Button>
              </div>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center" role="alert">
                  Thanks for subscribing!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm text-center" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="text-xs text-gray-500 text-center">
                Note: You can opt-out at any time. See our{' '}
                <a 
                  href="/privacy-policy" 
                  className="underline hover:text-gray-700"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a 
                  href="/terms" 
                  className="underline hover:text-gray-700"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
                .
              </p>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailSignup;