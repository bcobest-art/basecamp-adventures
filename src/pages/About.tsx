import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Users, Award, Target, Heart, Shield } 

from "lucide-react";
import ipan from "@/assets/ipan.jpg";
import ilal from "@/assets/ilal.jpg";
import padd from "@/assets/padd.jpg";

const About = () => {
  const stats = [
    { number: "10+", label: "Tahun Pengalaman" },
    { number: "5000+", label: "Petualang Terlayani" },
    { number: "150+", label: "Trip Sukses" },
    { number: "50+", label: "Destinasi" }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Keselamatan adalah prioritas utama dalam setiap layanan dan aktivitas yang kami selenggarakan"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Adventure",
      description: "Cinta terhadap alam dan petualangan mendorong kami memberikan pengalaman terbaik"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Membangun komunitas outdoor yang solid dan saling mendukung satu sama lain"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence Service",
      description: "Komitmen memberikan layanan berkualitas tinggi dengan standar profesional"
    }
  ];

  const team = [
    {
      name: "PaddlePedaw",
      role: "Founder & CEO",
      experience: "15 tahun",
      specialty: "Mountain Guide, Safety Instructor",
      image: padd
    },
    {
      name: "Aprillilah", 
      role: "Operations Manager",
      experience: "12 tahun",
      specialty: "Event Planning, Customer Relations",
      image: ilal
    },
    {
      name: "IpanMargopan",
      role: "Lead Guide",
      experience: "10 tahun", 
      specialty: "Climbing, Rafting Instructor",
      image: ipan
    }
  ];

  const certifications = [
    "Certified Mountain Guide",
    "Wilderness First Aid",
    "Rafting Instructor License",
    "Tourism Business License",
    "Safety Equipment Certified"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Tentang BaseCampOutdoor</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Didirikan dari passion terhadap alam dan petualangan, kami berkomitmen menjadi 
            partner terpercaya untuk semua kebutuhan outdoor adventure Anda sejak 2014.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BaseCampOutdoor lahir dari kecintaan mendalam terhadap alam dan petualangan. 
                  Dimulai dari sekelompok kecil pecinta alam yang sering mengorganisir trip bersama, 
                  kami menyadari kebutuhan akan layanan outdoor yang profesional dan terpercaya.
                </p>
                <p>
                  Pada tahun 2014, kami resmi mendirikan BaseCampOutdoor dengan visi menjadi 
                  one-stop solution untuk semua kebutuhan petualangan outdoor. Dari rental gear 
                  hingga event organizer, kami terus berkembang mengikuti kebutuhan komunitas.
                </p>
                <p>
                  Hari ini, setelah 10+ tahun melayani ribuan petualang, kami bangga menjadi 
                  bagian dari perjalanan tak terlupakan mereka. Setiap petualangan yang kami 
                  fasilitasi adalah bukti komitmen kami terhadap kualitas dan keselamatan.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Our Story" 
                className="rounded-lg shadow-nature w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end p-6">
                <div className="text-white">
                  <p className="font-semibold">First Trip 2014</p>
                  <p className="text-sm opacity-90">Gunung Gede Pangrango</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap layanan dan keputusan yang kami ambil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-nature transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full text-primary mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
            <p className="text-muted-foreground">
              Orang-orang berpengalaman yang membuat setiap petualangan menjadi memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-nature transition-all duration-300">
                <div className="aspect-square bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <Badge variant="outline" className="mb-2">
                      <Award className="w-3 h-3 mr-1" />
                      {member.experience} Experience
                    </Badge>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sertifikasi & Kredibilitas</h2>
              <p className="text-muted-foreground mb-6">
                Kepercayaan Anda adalah yang utama. Kami memiliki berbagai sertifikasi 
                dan lisensi resmi untuk menjamin kualitas dan keamanan layanan.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Member of:</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Indonesia Mountain Guide Association</p>
                  <p>• Adventure Tourism Indonesia</p>
                  <p>• Outdoor Equipment Retailers Association</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Visi & Misi</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">VISI</h4>
                  <p className="text-sm opacity-90">
                    Menjadi perusahaan outdoor terdepan di Indonesia yang menginspirasi 
                    lebih banyak orang untuk mencintai alam dan petualangan.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">MISI</h4>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>• Menyediakan layanan outdoor berkualitas tinggi</li>
                    <li>• Membangun komunitas outdoor yang solid</li>
                    <li>• Mempromosikan wisata alam berkelanjutan</li>
                    <li>• Memberikan edukasi keselamatan outdoor</li>
                  </ul>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="w-full mt-6">
                <Mountain className="mr-2 h-5 w-5" />
                Join Our Adventure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;