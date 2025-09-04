import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type ProducerInfo } from "@shared/schema";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { z } from "zod";

interface ContactSectionProps {
  producer?: ProducerInfo;
}

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection({ producer }: ContactSectionProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const socialLinks = producer?.socialLinks ? JSON.parse(producer.socialLinks) : {};

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Let's Create Something Meaningful</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a story that needs to be told? Let's discuss how we can bring it to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary text-foreground p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground" data-testid="text-contact-email">
                    {producer?.email || "marcus@documentaryproducer.com"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary text-foreground p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground" data-testid="text-contact-phone">
                    {producer?.phone || "+1 (555) 123-4567"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary text-foreground p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground" data-testid="text-contact-location">
                    {producer?.location || "Los Angeles, CA"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-semibold mb-6">Follow My Work</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={socialLinks.instagram || "#"}
                  className="flex items-center p-4 bg-card rounded-lg hover:shadow-lg transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-instagram"
                >
                  <Instagram className="h-8 w-8 text-pink-500 mr-3" />
                  <div>
                    <h5 className="font-semibold">Instagram</h5>
                    <p className="text-sm text-muted-foreground">Behind the scenes</p>
                  </div>
                </a>
                
                <a
                  href={socialLinks.tiktok || "#"}
                  className="flex items-center p-4 bg-card rounded-lg hover:shadow-lg transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-tiktok"
                >
                  <SiTiktok className="h-8 w-8 text-black mr-3" />
                  <div>
                    <h5 className="font-semibold">TikTok</h5>
                    <p className="text-sm text-muted-foreground">Quick insights</p>
                  </div>
                </a>
                
                <a
                  href={socialLinks.linkedin || "#"}
                  className="flex items-center p-4 bg-card rounded-lg hover:shadow-lg transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h5 className="font-semibold">LinkedIn</h5>
                    <p className="text-sm text-muted-foreground">Professional updates</p>
                  </div>
                </a>
                
                <a
                  href={socialLinks.youtube || "#"}
                  className="flex items-center p-4 bg-card rounded-lg hover:shadow-lg transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-youtube"
                >
                  <Youtube className="h-8 w-8 text-red-600 mr-3" />
                  <div>
                    <h5 className="font-semibold">YouTube</h5>
                    <p className="text-sm text-muted-foreground">Full documentaries</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-serif font-semibold mb-8">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            data-testid="input-contact-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            data-testid="input-contact-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Project collaboration inquiry"
                          data-testid="input-contact-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          placeholder="Tell me about your project or story idea..."
                          className="resize-none"
                          data-testid="textarea-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
