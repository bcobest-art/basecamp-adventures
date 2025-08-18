import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon & WhatsApp",
      details: ["+62 857-8116-0699"],
      description: "Tersedia 24/7 untuk emergency"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["bco.best@gmail.com", "booking@basecampoutdoor.com"],
      description: "Respon dalam 2-4 jam kerja"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Toko",
      details: ["Jl. Pualam Raya No 37 Kemayoran Jakarta Pusat"],
      description: "10 menit dari stasiun kemayoran"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional", 
      details: ["Selasa - Minggu: 13:00 - 23:00 WIB", "Konsultasi 24/6 via WhatsApp"],
      description: "Tutup hanya senin"
    }
  ];

  const services = [
    "Rental Gear Consultation",
    "Product Recommendations", 
    "Trip Planning Assistance",
    "Custom Event Organizer",
    "Repair Service Estimate",
    "Bulk Order Inquiry"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-forest text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Punya pertanyaan tentang gear, trip, atau layanan kami? 
            Tim customer service siap membantu Anda 24/7.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-nature transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full text-primary mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium">{detail}</p>
                    ))}
                  </div>
                  <CardDescription className="text-xs">{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan kami akan menghubungi Anda sesegera mungkin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nama Depan</Label>
                      <Input id="firstName" placeholder="Nama depan Anda" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nama Belakang</Label>
                      <Input id="lastName" placeholder="Nama belakang Anda" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">No. WhatsApp</Label>
                    <Input id="phone" placeholder="+62 812-3456-7890" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input id="subject" placeholder="Tentang apa yang ingin Anda tanyakan?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Ceritakan detail kebutuhan atau pertanyaan Anda..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-forest" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Services & Quick Contact */}
            <div className="space-y-8">
              
              {/* What We Can Help */}
              <Card>
                <CardHeader>
                  <CardTitle>Yang Bisa Kami Bantu</CardTitle>
                  <CardDescription>Konsultasi gratis untuk berbagai kebutuhan outdoor Anda</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick WhatsApp */}
              <Card className="bg-gradient-hero text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Chat WhatsApp
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Cara tercepat untuk mendapat bantuan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm opacity-90">
                      Tim customer service kami online 24/6 untuk menjawab pertanyaan 
                      dan membantu kebutuhan urgent Anda.
                    </p>
                    
                    <div className="space-y-2">
                      <Button variant="secondary" size="lg" className="w-full">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat Sales: +62 856-7890-1234
                      </Button>
                      <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Center: +62 856-7890-1234
                      </Button>
                    </div>

                    <div className="text-xs opacity-75 text-center">
                      <p>Response time rata-rata: 5 menit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Lokasi Toko</CardTitle>
                  <CardDescription>Kunjungi showroom kami untuk melihat langsung produk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-muted-foreground">Google Maps akan ditampilkan di sini</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">BaseCampOutdoor Store</p>
                        <p className="text-muted-foreground">Jl. Pualam Raya No 37 Kemayoran Jakarta Pusat</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Buka Selasa-Minggu, 13:00-23:00 WIB</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pertanyaan Umum</h2>
          <p className="text-muted-foreground mb-8">
            Cek FAQ kami untuk jawaban cepat pertanyaan yang sering ditanyakan
          </p>
          <Button variant="outline" size="lg">
            Lihat FAQ Lengkap
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;