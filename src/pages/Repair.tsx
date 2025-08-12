import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Clock, CheckCircle, Camera } from "lucide-react";

const Repair = () => {
  const repairServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      name: "Jahit Ulang & Patching",
      description: "Perbaikan sobek, lubang, dan jahitan pada gear",
      price: "25.000",
      duration: "2-3 hari",
      examples: ["Tenda sobek", "Sleeping bag rusak", "Jaket berlubang", "Tas carrier robek"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      name: "Perbaikan Resleting",
      description: "Service dan ganti resleting semua jenis gear",
      price: "15.000",
      duration: "1-2 hari",
      examples: ["Jaket zipper rusak", "Tas zipper macet", "Tenda zipper patah", "Sleeping bag zipper"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      name: "Waterproof Restoration",
      description: "Mengembalikan sifat waterproof yang hilang",
      price: "35.000",
      duration: "3-4 hari",
      examples: ["Jaket bocor", "Tenda rembes", "Sarung tangan basah", "Sepatu hiking bocor"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      name: "Repair Aksesoris",
      description: "Perbaikan buckle, strap, dan komponen kecil",
      price: "10.000",
      duration: "1 hari",
      examples: ["Buckle patah", "Strap putus", "Velcro rusak", "D-ring lepas"]
    }
  ];

  const beforeAfter = [
    {
      title: "Tenda Dome - Jahit Ulang",
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      description: "Perbaikan sobek besar pada flysheet tenda dengan teknik jahit profesional"
    },
    {
      title: "Jaket Hiking - Zipper Repair", 
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      description: "Penggantian zipper utama dan perbaikan waterproof coating"
    },
    {
      title: "Sleeping Bag - Patching",
      before: "/placeholder.svg", 
      after: "/placeholder.svg",
      description: "Patch pada lubang besar dan restorasi down filling"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Repair Service</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Service profesional untuk semua jenis perlengkapan outdoor. 
            Perpanjang umur gear berharga Anda dengan teknisi berpengalaman.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Camera className="mr-2 h-5 w-5" />
            Konsultasi Gratis
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Layanan Repair</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dari perbaikan kecil hingga restoration lengkap, kami siap menangani semua kerusakan gear outdoor Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-nature transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-nature-orange/10 rounded-lg text-nature-orange">
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
                        <span className="text-sm text-muted-foreground ml-1">mulai dari</span>
                      </div>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Contoh kerusakan:</p>
                      <ul className="space-y-1">
                        {service.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-nature-orange rounded-full mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-earth hover:shadow-earth">
                      Konsultasi Repair
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before After Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hasil Pekerjaan Kami</h2>
            <p className="text-muted-foreground">Lihat transformasi gear outdoor yang kami perbaiki</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((work, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={work.before} alt="Before" className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 left-2 bg-destructive">Before</Badge>
                  </div>
                  <div className="relative">
                    <img src={work.after} alt="After" className="w-full h-48 object-cover" />
                    <Badge className="absolute top-2 right-2 bg-primary">After</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{work.title}</CardTitle>
                  <CardDescription className="text-sm">{work.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Guarantee */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Proses Repair</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Konsultasi & Diagnosis</h3>
                    <p className="text-muted-foreground text-sm">Tim teknisi akan mengecek kerusakan dan memberikan estimasi biaya & waktu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Persetujuan & Pembayaran</h3>
                    <p className="text-muted-foreground text-sm">Setelah setuju dengan estimasi, pembayaran 50% di muka sebagai tanda jadi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proses Repair</h3>
                    <p className="text-muted-foreground text-sm">Teknisi berpengalaman akan memperbaiki dengan material berkualitas tinggi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Control</h3>
                    <p className="text-muted-foreground text-sm">Pengecekan hasil akhir dan testing fungsionalitas sebelum diserahkan</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Pengambilan & Garansi</h3>
                    <p className="text-muted-foreground text-sm">Gear siap diambil dengan garansi repair selama 6 bulan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Jaminan Kami</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Garansi repair 6 bulan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Material replacement berkualitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Teknisi berpengalaman 10+ tahun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Uang kembali jika tidak puas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Free pickup & delivery</span>
                </div>
              </div>

              <div className="border-t border-primary-foreground/20 pt-6">
                <h4 className="font-semibold mb-3">Estimasi Waktu Repair:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Perbaikan ringan:</span>
                    <span>1-2 hari</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Perbaikan sedang:</span>
                    <span>3-5 hari</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Restoration lengkap:</span>
                    <span>1-2 minggu</span>
                  </div>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="w-full mt-6">
                Kirim Foto Kerusakan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Repair;