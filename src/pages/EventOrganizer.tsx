import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Star, Clock, Shield } from "lucide-react";

const EventOrganizer = () => {
  const packages = [
    {
      category: "Hiking Trip",
      icon: <MapPin className="w-8 h-8" />,
      packages: [
        {
          name: "Gunung Bromo Sunrise",
          duration: "2D1N",
          price: "450.000",
          participants: "Min 4 orang",
          includes: ["Transport", "Guide", "Jeep", "Breakfast"],
          rating: 4.9,
          image: "/placeholder.svg"
        },
        {
          name: "Gunung Papandayan", 
          duration: "1D",
          price: "185.000",
          participants: "Min 6 orang",
          includes: ["Transport", "Guide", "Snack", "P3K"],
          rating: 4.7,
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Camping Trip",
      icon: <Users className="w-8 h-8" />,
      packages: [
        {
          name: "Camping Ranca Upas",
          duration: "2D1N", 
          price: "320.000",
          participants: "Min 4 orang",
          includes: ["Tenda", "Sleeping bag", "Transport", "BBQ"],
          rating: 4.8,
          image: "/placeholder.svg"
        },
        {
          name: "Glamping Sukabumi",
          duration: "2D1N",
          price: "650.000", 
          participants: "Min 2 orang",
          includes: ["Glamping tent", "All meals", "Activities"],
          rating: 4.9,
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Rafting Adventure",
      icon: <Clock className="w-8 h-8" />,
      packages: [
        {
          name: "Rafting Sungai Citarik",
          duration: "1D",
          price: "365.000",
          participants: "Min 6 orang", 
          includes: ["Safety gear", "Guide", "Lunch", "Transport"],
          rating: 4.6,
          image: "/placeholder.svg"
        },
        {
          name: "Rafting + Camping",
          duration: "2D1N",
          price: "585.000",
          participants: "Min 8 orang",
          includes: ["Rafting", "Camping", "All meals", "Bonfire"],
          rating: 4.8,
          image: "/placeholder.svg"
        }
      ]
    }
  ];

  const corporateServices = [
    {
      title: "Team Building",
      description: "Program khusus untuk meningkatkan kerjasama tim",
      features: ["Custom program", "Professional facilitator", "Team games", "Reflection session"],
      price: "155.000/person"
    },
    {
      title: "Corporate Outing",
      description: "Paket lengkap untuk acara perusahaan",
      features: ["Event planning", "Venue booking", "Catering", "Transportation"],
      price: "400.000/person"
    },
    {
      title: "Leadership Training",
      description: "Outdoor training untuk pengembangan leadership",
      features: ["Outdoor challenges", "Expert trainer", "Leadership assessment", "Certificate"],
      price: "550.000/person"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-mountain text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Event Organizer</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Wujudkan petualangan impian Anda bersama kami. 
            Dari trip pribadi hingga corporate event, kami siap mengorganisir pengalaman tak terlupakan.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Calendar className="mr-2 h-5 w-5" />
            Lihat Jadwal Trip
          </Button>
        </div>
      </section>

      {/* Adventure Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Paket Petualangan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pilihan paket trip yang dirancang untuk memberikan pengalaman outdoor terbaik
            </p>
          </div>

          {packages.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.packages.map((pkg, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-nature transition-all duration-300">
                    <div className="aspect-video bg-muted relative">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                      <Badge className="absolute top-3 left-3 bg-primary">
                        {pkg.duration}
                      </Badge>
                      <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-white font-medium">{pkg.rating}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{pkg.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Users className="h-4 w-4 mr-1" />
                            {pkg.participants}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">Rp {pkg.price}</span>
                          <p className="text-xs text-muted-foreground">per orang</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Termasuk:</p>
                          <div className="flex flex-wrap gap-1">
                            {pkg.includes.map((item, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-forest">
                          Booking Trip
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Corporate Event</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Layanan khusus untuk kebutuhan perusahaan dan organisasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover:shadow-nature transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold text-primary">{service.price}</span>
                        <Badge variant="outline">Custom</Badge>
                      </div>
                      <Button className="w-full" variant="outline">
                        Konsultasi Gratis
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mengapa Memilih Event Organizer Kami?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Safety First</h3>
                    <p className="text-muted-foreground text-sm">Protokol keamanan lengkap dan guide bersertifikat untuk setiap trip</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Berpengalaman</h3>
                    <p className="text-muted-foreground text-sm">10+ tahun pengalaman mengorganisir trip dan event outdoor</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Destinasi Terbaik</h3>
                    <p className="text-muted-foreground text-sm">Akses ke spot-spot tersembunyi dan lokasi eksklusif</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Calendar className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Schedule</h3>
                    <p className="text-muted-foreground text-sm">Custom jadwal sesuai kebutuhan grup dan perusahaan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Paket Custom</h3>
              <p className="mb-6 opacity-90">
                Butuh trip dengan spesifikasi khusus? Kami bisa mengatur sesuai kebutuhan Anda!
              </p>
              
              <div className="space-y-3 mb-6 text-sm">
                <p>✓ Pilih destinasi sendiri</p>
                <p>✓ Atur durasi sesuai kebutuhan</p>
                <p>✓ Custom activities & program</p>
                <p>✓ Pilih tingkat kesulitan</p>
                <p>✓ Catering sesuai preferensi</p>
                <p>✓ Budget planning assistance</p>
              </div>

              <div className="space-y-3">
                <Button variant="secondary" size="lg" className="w-full">
                  Konsultasi Trip Custom
                </Button>
                <p className="text-center text-xs opacity-75">
                  Konsultasi gratis • Minimal 10 orang
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Bergabung?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Dapatkan pengalaman outdoor tak terlupakan bersama tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Lihat Jadwal Open Trip
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Request Private Trip
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventOrganizer;