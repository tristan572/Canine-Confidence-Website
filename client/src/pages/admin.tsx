import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Code, FileText, Settings } from "lucide-react";

export default function AdminPage() {
  const [bookingWidgetCode, setBookingWidgetCode] = useState("");
  const { toast } = useToast();

  const handleSaveBookingWidget = () => {
    // This would save the booking widget code to your site
    // For now, we'll show you how to integrate it
    toast({
      title: "Instructions Ready",
      description: "Booking widget integration steps are ready below.",
    });
  };

  return (
    <div className="min-h-screen bg-light-grey py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Website Management</h1>
          <p className="text-xl text-medium-grey">
            Quick setup guides for content updates and booking integration.
          </p>
        </div>

        <Tabs defaultValue="booking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="booking">Booking Integration</TabsTrigger>
            <TabsTrigger value="content">Content Updates</TabsTrigger>
          </TabsList>

          <TabsContent value="booking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  SimplyBook.me Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Step 1: Get your booking widget code</h3>
                  <ol className="list-decimal list-inside space-y-2 text-medium-grey">
                    <li>Log into your SimplyBook.me account</li>
                    <li>Go to Settings → Booking widget</li>
                    <li>Copy the embed code (iframe or JavaScript)</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Step 2: Paste your widget code here</h3>
                  <div>
                    <Label htmlFor="widgetCode">SimplyBook.me Widget Code</Label>
                    <Textarea
                      id="widgetCode"
                      placeholder="Paste your SimplyBook.me embed code here..."
                      value={bookingWidgetCode}
                      onChange={(e) => setBookingWidgetCode(e.target.value)}
                      rows={6}
                      className="font-mono text-sm"
                    />
                  </div>
                  <Button onClick={handleSaveBookingWidget} className="w-full">
                    <Code className="h-4 w-4 mr-2" />
                    Save Booking Integration
                  </Button>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">What happens next?</h4>
                  <p className="text-sm text-medium-grey">
                    Once you provide the widget code, I'll integrate it seamlessly into your website. 
                    Your booking buttons will open the SimplyBook.me interface directly on your site, 
                    keeping customers engaged without redirecting them away.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Content Update Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Services & Pricing</h3>
                  <p className="text-medium-grey">
                    Service information is stored in: <code className="bg-gray-100 px-2 py-1 rounded">server/storage.ts</code>
                  </p>
                  <p className="text-sm text-medium-grey">
                    To update pricing or service descriptions, edit the serviceData array around line 87.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Homepage Content</h3>
                  <p className="text-medium-grey">
                    Main homepage text is in: <code className="bg-gray-100 px-2 py-1 rounded">client/src/pages/home.tsx</code>
                  </p>
                  <p className="text-sm text-medium-grey">
                    Update hero text, descriptions, and call-to-action messages directly in this file.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Blog Posts</h3>
                  <p className="text-medium-grey">
                    Blog content is in: <code className="bg-gray-100 px-2 py-1 rounded">server/storage.ts</code>
                  </p>
                  <p className="text-sm text-medium-grey">
                    Add new blog posts or edit existing ones in the blogData array around line 180.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <p className="text-medium-grey">
                    Update contact details in multiple locations:
                  </p>
                  <ul className="list-disc list-inside text-sm text-medium-grey space-y-1">
                    <li><code className="bg-gray-100 px-2 py-1 rounded">client/src/pages/contact.tsx</code> - Contact page</li>
                    <li><code className="bg-gray-100 px-2 py-1 rounded">client/src/components/layout/footer.tsx</code> - Footer</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Need help updating content?</h4>
                  <p className="text-sm text-medium-grey">
                    Send me the specific text changes you want to make, and I can update 
                    multiple sections quickly for you. This is especially helpful when you need 
                    to change wording across many pages at once.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}