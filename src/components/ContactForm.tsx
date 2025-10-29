import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  productName?: string;
}

const ContactForm = ({ productName = "" }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productName: productName,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send to backend
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest. We'll contact you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      productName: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-inter">Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="font-inter"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="font-inter">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="font-inter"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-inter">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="font-inter"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="productName" className="font-inter">Product Name</Label>
        <Input
          id="productName"
          type="text"
          placeholder="Product you're interested in"
          value={formData.productName}
          onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
          className="font-inter"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-inter">Message / Customization Request</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-[120px] font-inter resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        Send Inquiry
      </Button>
    </form>
  );
};

export default ContactForm;
