
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const DonateSection = () => {
  const [donationAmount, setDonationAmount] = useState<string>('1000');
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonationChange = (value: string) => {
    setDonationAmount(value);
    if (value !== 'custom') {
      setCustomAmount('');
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  return (
    <section className="py-20 bg-gauSeva-green text-white font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Your contribution helps us provide shelter, food, and medical care to cows in need. Every donation, big or small, makes a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white text-gauSeva-brown border-none overflow-hidden lg:col-span-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gauSeva-brown">Full Name</Label>
                  <Input id="name" placeholder="Your name" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gauSeva-brown">Email Address</Label>
                  <Input id="email" type="email" placeholder="Your email" className="mt-1" />
                </div>
                
                <div>
                  <Label className="text-gauSeva-brown mb-3 block">Donation Amount (₹)</Label>
                  <RadioGroup 
                    value={donationAmount} 
                    onValueChange={handleDonationChange}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="500" id="r1" />
                      <Label htmlFor="r1">₹500</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1000" id="r2" />
                      <Label htmlFor="r2">₹1,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2100" id="r3" />
                      <Label htmlFor="r3">₹2,100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5100" id="r4" />
                      <Label htmlFor="r4">₹5,100</Label>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2 md:col-span-4">
                      <RadioGroupItem value="custom" id="r5" />
                      <Label htmlFor="r5">Custom Amount</Label>
                      {donationAmount === 'custom' && (
                        <Input 
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          placeholder="Enter amount" 
                          className="ml-2 w-32" 
                        />
                      )}
                    </div>
                  </RadioGroup>
                </div>
                
                <Button className="w-full bg-gauSeva-orange hover:bg-gauSeva-brown text-white">
                  Donate Now
                </Button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  All donations are tax-deductible under Section 80G of Income Tax Act
                </p>
              </form>
            </CardContent>
          </Card>
          
          <Card className="bg-gauSeva-orange text-white border-none overflow-hidden">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6">Other Ways to Help</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Monthly Giving</h4>
                  <p className="text-white/80">Become a regular donor and support our work consistently.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cow Adoption</h4>
                  <p className="text-white/80">Sponsor the care of a specific cow through our adoption program.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Volunteer</h4>
                  <p className="text-white/80">Contribute your time and skills to help with our various activities.</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-6 border-white text-white hover:bg-white hover:text-gauSeva-orange"
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
