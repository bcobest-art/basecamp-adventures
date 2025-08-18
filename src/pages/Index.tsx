import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { 
  Tent, 
  ShoppingBag, 
  Droplets, 
  Wrench, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mountain,
  TreePine,
  Waves
} from "lucide-react";
import heroMountain from "@/assets/hero-mountain.jpg";
import campingScene from "@/assets/background.jpg";
import outdoorGear from "@/assets/TrekkingSentul.jpg";

const Index = () => {
  const services = [
    {
      icon: <Tent className="w-8 h-8" />,
      title: "Rental Gear",
      description: "Sewa perlengkapan outdoor berkualitas dengan harga terjangkau",
      link: "/rental",
      features: ["Tenda dome Kap.4/5", "Carrier", "Sepatu Trekking",
          "Sleeping Bag","Matras","Peralatan Hiking", "Kompor & Matras", "Gear Rafting"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Shop Online",
      description: "Belanja perlengkapan outdoor original dengan garansi resmi",
      link: "/shop",
      features: ["Sepatu & Jaket Hiking", "Tas Carrier", "Peralatan Climbing", "Aksesoris Outdoor"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Laundry & Care",
      description: "Layanan cuci dan perawatan khusus perlengkapan outdoor",
      link: "/laundry",
      features: ["Waterproof Care", "Sleeping Bag Cleaning", "Tenda Maintenance", "Express Service"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repair Service",
      description: "Perbaikan profesional untuk semua jenis gear outdoor",
      link: "/repair",
      features: ["Jahit Ulang Tenda", "Perbaikan Resleting", "Patching & Waterproofing", "Garansi Hasil"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Organizer",
      description: "Paket trip dan event outdoor untuk semua kalangan",
      link: "/event-organizer",
      features: ["Hiking & Camping Trip", "Rafting Adventure", "Team Building", "Corporate Outing"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmad Ridwan",
      role: "Pecinta Hiking",
      rating: 4,
      comment: "Gear rental yang lengkap dan berkualitas. Staff sangat membantu dalam memberikan rekomendasi sesuai kebutuhan trip saya."
    },
    {
      name: "Sari Dewi",
      role: "Organizer Komunitas",
      rating: 5,
      comment: "Event organizer terbaik! Trip ke Gunung Bromo yang diorganisir BaseCamp sangat berkesan dan aman."
    },
    {
      name: "Team PT. Daun Hijau",
      role: "Corporate",
      rating: 5,
      comment: "Team building rafting sangat seru dan professional. Semua equipment safety lengkap dan berkualitas kao rating ada bintang 7 sumbit bintang 7 deh."
    },
    {
      name: "Ridwan Iliyas",
      role: "Outdoor Entusiast",
      rating: 4,
      comment: "Kualiatas barang yang memuasakan harga bersahabat."
    },
    {
      name: "Adinda Thomas",
      role: "Artist Sport Activity",
      rating: 5,
      comment: "Trip yang menyenangkan seru berkegitan dengan TIM dan crew dari base camp outdoor."
    },
    {
      name: "Team PT. Sanubanyu",
      role: "Corporate",
      rating: 5,
      comment: "Outbound yang keren dan selalu ada cerita mengesankan."
    },
    {
      name: "bocil syanusi",
      role: "Marketer",
      rating: 5,
      comment: "membutuhkan alat jumlah banyak sangat dipersiapkan dari jumlah dan kondisi baik selalu tepat memilih kerjasama dengan BCO."
    },
    {
      name: "Djajang Suhendar",
      role: "Organizer Komunitas",
      rating: 6,
      comment: "abdi percaya pisan sama ini teh tak mengecewakan."
    },
    {
      name: "Team PT. Briliant E-commerce Berjaya",
      role: "Corporate",
      rating: 7,
      comment: "Rafting di sungai ciciatih grade IV sangat seru dan professional pengalman tak pernah dilupakan asik seru puas."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroMountain})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Petualangan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-nature-blue-light to-accent">
              Dimulai Dari Sini
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Partner terpercaya untuk semua kebutuhan outdoor adventure Anda. 
            Rental gear, shop online, hingga event organizer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">          
            <Button
              asChild
              size="lg"
              className="bg-gradient-hero hover:shadow-adventure text-lg px-8 py-6"
            >
              <a
                href="https://maps.app.goo.gl/qYV9UW9YAhdU53PQ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mountain className="mr-2 h-5 w-5" />
                Mulai Petualangan
              </a>
            </Button>            
            <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
          >
            <a 
              href="https://wa.me/6285781160699?text=Halo...Haii...Admin%20%0ASayaa butuh bantuan ni...%0ANama%20:%0AProduk%20:%0A(pilih%20salah%20satu)%0A1.Rental,%202.Laundry,%203.Shop,%204.Repair,%205.Event%20%0ATanggal%20:%0AKeterangan%20:"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
            </a>
          </Button>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute bottom-20 left-10 animate-float">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
            <TreePine className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{animationDelay: '1s'}}>
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
            <Waves className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Layanan Unggulan Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan petualangan outdoor Anda, 
              dari gear berkualitas hingga pengalaman tak terlupakan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Mengapa Memilih BaseCampOutdoor?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Gear Berkualitas Tinggi</h3>
                    <p className="text-muted-foreground">Semua peralatan dari brand ternama dan selalu dalam kondisi prima</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Harga Terjangkau</h3>
                    <p className="text-muted-foreground">Paket rental dan harga yang kompetitif untuk semua kalangan</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Layanan Professional</h3>
                    <p className="text-muted-foreground">Tim berpengalaman yang siap membantu setiap kebutuhan adventure Anda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pengalaman 10+ Tahun</h3>
                    <p className="text-muted-foreground">Kepercayaan ribuan petualang yang telah merasakan layanan kami</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={campingScene} 
                alt="Camping Scene" 
                className="rounded-lg shadow-nature h-65 w-full object-cover"
              />
              <img 
                src={outdoorGear} 
                alt="Outdoor Gear" 
                className="rounded-lg shadow-nature h-65 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Kata Mereka Tentang Kami</h2>
            <p className="text-xl text-muted-foreground">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:shadow-nature transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-nature-orange text-nature-orange" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>              
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Petualangan Anda?</h2>
          <p className="text-xl mb-8 opacity-90">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button 
            asChild size="lg" variant="secondary" 
            className="text-lg px-8 py-6"
          >
            <a 
              href="https://wa.me/6285781160699?text=Halo...Haii...Admin%20%0ASayaa butuh bantuan ni...%0ANama%20:%0AProduk%20:%0A(pilih%20salah%20satu)%0A1.Rental,%202.Laundry,%203.Shop,%204.Repair,%205.Event%20%0ATanggal%20:%0AKeterangan%20:" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi WhatsApp
            </a>
          </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              Lihat Semua Layanan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
