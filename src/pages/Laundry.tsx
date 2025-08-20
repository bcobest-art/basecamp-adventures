import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Clock, Shield, Sparkles } from "lucide-react";

const Laundry = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      name: "Regular Washing",
      description: "Cuci standar untuk peralatan outdoor",
      price: "30.000",
      duration: "2-3 hari",
      items: ["Tenda", "Sleeping bag", "Jaket", "Celana hiking"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "Waterproof Treatment",
      description: "Perawatan dan restore waterproof coating",
      price: "35.000",
      duration: "3-4 hari", 
      items: ["Jaket waterproof", "Celana outdoor", "Sarung tangan", "Gaiters"],
      popular: true
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Deep Cleaning",
      description: "Pembersihan mendalam dengan treatment khusus",
      price: "65.000",
      duration: "3-5 hari",
      items: ["Sleeping bag bulu", "Tenda kotor berat", "Tas carrier", "Sepatu hiking"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      name: "Express Service",
      description: "Layanan cuci kilat untuk kebutuhan mendesak",
      price: "20.000",
      duration: "1 hari",
      items: ["Semua jenis gear", "Pickup & delivery", "Priority handling"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Drop Off / Pickup",
      description: "Antar langsung ke toko atau gunakan layanan pickup gratis"
    },
    {
      step: "2", 
      title: "Inspeksi & Assessment",
      description: "Tim kami akan mengecek kondisi dan menentukan treatment terbaik"
    },
    {
      step: "3",
      title: "Professional Cleaning",
      description: "Proses cuci dengan detergen khusus dan teknologi professional"
    },
    {
      step: "4",
      title: "Quality Check",
      description: "Pengecekan hasil dan quality control sebelum pengemasan"
    },
    {
      step: "5",
      title: "Delivery / Pickup",
      description: "Gear siap diambil atau diantar kembali dalam kondisi prima"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nature-blue to-accent text-primary-foreground"
      style={{ backgroundImage: "url('/assets/laund.jpg')" }} 
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Laundry & Care Service</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Layanan cuci dan perawatan khusus untuk perlengkapan outdoor Anda. 
            Dipercaya ribuan petualang untuk merawat gear berharga mereka.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Droplets className="mr-2 h-5 w-5" />
            Pesan Layanan
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai pilihan layanan cuci dan perawatan sesuai kebutuhan gear outdoor Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`hover:shadow-nature transition-all duration-300 relative ${service.popular ? 'border-primary shadow-adventure' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary">Terpopuler</Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-primary">Rp {service.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">per item</span>
                      </div>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Cocok untuk:</p>
                      <ul className="space-y-1">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-forest">
                      Pilih Layanan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proses Layanan</h2>
            <p className="text-muted-foreground">5 langkah mudah untuk gear outdoor yang bersih dan terawat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mengapa Memilih Laundry Service Kami?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teknologi Professional</h3>
                    <p className="text-muted-foreground text-sm">Menggunakan detergen khusus outdoor dan mesin professional grade</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Droplets className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Waterproof Restoration</h3>
                    <p className="text-muted-foreground text-sm">Layanan khusus untuk mengembalikan sifat waterproof gear Anda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Express Service</h3>
                    <p className="text-muted-foreground text-sm">Layanan kilat 24 jam untuk kebutuhan mendesak</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Pickup & Delivery</h3>
                    <p className="text-muted-foreground text-sm">Gratis antar jemput dalam radius 15km dari toko</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Paket Berlangganan</h3>
              <p className="mb-4 opacity-90">Cuci rutin gear Anda dengan harga lebih hemat!</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Paket 5x cuci:</span>
                  <span className="font-bold">Rp 60.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Paket 10x cuci:</span>
                  <span className="font-bold">Rp 110.000</span>
                </div>
                <div className="text-sm opacity-75">*Hemat hingga 25% dari harga normal</div>
              </div>
              <div className="space-y-2 mb-6 text-sm">
                <p>✓ Berlaku 1 tahun dari pembelian</p>
                <p>✓ Bisa untuk semua jenis layanan</p>
                <p>✓ Free pickup & delivery</p>
                <p>✓ Priority queue</p>
              </div>
              <Button variant="secondary" size="lg" className="w-full">
                Beli Paket Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Laundry;