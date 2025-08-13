import { Mountain, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Mountain className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">BaseCamp</h2>
                <p className="text-sm opacity-80">Outdoor</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Partner terpercaya untuk semua kebutuhan petualangan outdoor Anda. 
              Dari rental gear hingga event organizer, kami siap menemani setiap langkah perjalanan Anda.
            </p>
            <div className="flex space-x-3">
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Youtube className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan Kami</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rental" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Rental Gear</Link></li>
              <li><Link to="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Shop Online</Link></li>
              <li><Link to="/laundry" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Laundry & Care</Link></li>
              <li><Link to="/repair" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Repair Service</Link></li>
              <li><Link to="/event-organizer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Event Organizer</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Info Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Tentang Kami</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Kontak</Link></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary-foreground/60" />
              <a 
                href="https://wa.me/6285781160699?text=%20Halo...Haii...Admin%20ASayaa butuh bantuan ni...., Nama%20:%0AProduk%20:%20Rental,%20Laundry,%20Shop,%20Repair,%20Event%20(pilih%20salah%20satu)%0ATanggal%20:%0AKeterangan%20:" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:underline"
              >
                +62 857-8116-0699
              </a>
            </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">bco.best@gmail.coom</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-1" />
                <span className="text-primary-foreground/80">
                  Jl. Pualam Raya No 37 Kel. Sumur Batu<br />
                  Kec. Kemayoran Kota. Jakarta Pusat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 BaseCampOutdoor. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">Jam Operasional: Selasa - Minggu, 13:00 - 23:00 WIB</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;