import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
// Dialog removed - using custom modal instead
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ShieldCheck,
  Trees,
  Cpu,
  Battery,
  CloudRain,
  Satellite,
  ClipboardCheck,
  Monitor as Dock,
  Monitor,
  Network,
  MousePointerClick,
  Maximize2,
  Smartphone,
  Calculator,
} from "lucide-react";

const placeholders = {
  IP_EM45: "IP65/IP68",
  MILSTD_EM45: "MIL-STD-810H",
  BATT_EM45_mAh: "4,750 mAh",
  Size_EM45: "Kompaktowe wymiary i grubość podobna do smartfona — łatwo mieści się w kieszeni, wygodny do noszenia przez cały dzień",
  GNSS_info: "Multi-GNSS (GPS, GLONASS, Galileo, BeiDou) z obsługą A-GPS dla precyzyjnego pozycjonowania nawet pod gęstym okapem drzew",
  Glove_Rain_Notes: "Jasny ekran widoczny w słońcu, działa w deszczu i śniegu, pełna obsługa w grubych rękawicach roboczych",
  Service_SLA_Notes: "Zebra OneCare Essential (8x5, 3 dni) lub Select (24x7, wymiana tego samego dnia) z unlimited battery replacement",
  MDM_Notes: "Android Enterprise, profil służbowy (Work Profile), Zebra LifeGuard dla aktualizacji bezpieczeństwa, integracja z EMM/UEM (VMware Workspace ONE, Microsoft Intune, SOTI MobiControl)",
  Dock_Ports: "HDMI (4K@60Hz), Ethernet Gigabit, 4x USB-A 3.0, USB-C (ładowanie), 3.5mm audio jack",
  Dex_Limits: "Samsung nie ma oficjalnej stacji dokującej - trzeba kupować adaptery innych firm, które często mają tylko HDMI i ładowanie. Brak portów USB oznacza, że klawiaturę i mysz trzeba łączyć przez Bluetooth, co jest niewygodne i mniej niezawodne",
  Contact_Phone: "+48 22 123 45 67",
  Contact_Email: "silp@zebra-partner.pl",
  Company_Name: "TAKMA",
  Company_Address: "ul. Poświęcka 1A, 51-128 Wrocław",
  Distributor: "ZAKŁAD PRODUKCYJNO USŁUGOWO HANDLOWY w Łodzi",
};

const forestBg = "bg-[radial-gradient(ellipse_at_top_left,rgba(16,62,41,0.10),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(7,28,18,0.12),transparent_40%)]";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-24 py-14 md:py-20 ${className}`}>
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
  </section>
);

const Hero = () => (
  <Section id="hero" className={`${forestBg} relative overflow-hidden pt-10 md:pt-16`}>
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pine" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 10 L75 35 L45 35 Z" fill="rgba(34,139,87,0.15)" />
            <path d="M60 30 L85 70 L35 70 Z" fill="rgba(34,139,87,0.10)" />
            <rect x="58" y="70" width="4" height="20" fill="rgba(34,139,87,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pine)" />
      </svg>
    </div>

    <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
      {/* Left column - Text content */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="relative"
      >
        <motion.div 
          className="mb-6 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Badge variant="secondary" className="bg-emerald-800/90 text-emerald-50 transition-transform hover:scale-105">
            Kompatybilne z Leśnik+
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold leading-tight text-emerald-950 md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Zebra EM45 - to nie tylko smartfon!
        </motion.h1>
        
        <motion.p 
          className="mt-4 max-w-3xl text-base text-emerald-950/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Rejestrator w terenie, telefon w trasie, komputer w biurze. Zebra EM45 ze stacją dokującą{" "}
          <a 
            href="#workstation-connect" 
            className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-md transition-all hover:scale-105 hover:shadow-md cursor-pointer border border-emerald-200 hover:border-emerald-300"
          >
            <span>Zebra Workstation Connect</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          {" "}to uniwersalne rozwiązanie 3 w 1 — niezawodność przemysłowa spotyka się z elastycznością użytkowania.
        </motion.p>
        
        <motion.div 
          className="mt-6 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg" asChild className="transition-all hover:scale-105 hover:shadow-lg">
            <a href="#kontakt">Skontaktuj się z nami</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="transition-all hover:scale-105 hover:shadow-md">
            <a href="#dostepnosc">Zobacz dostępność</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right column - Device image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative"
      >
        <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
          {/* Zebra EM45 device image */}
          <div className="relative h-full">
            <img 
              src="/zebra-em45.png" 
              alt="Zebra EM45 - Przemysłowe urządzenie mobilne dla Lasów Państwowych" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl" />
        </div>
      </motion.div>
    </div>
  </Section>
);


const Table = ({ headers, rows }: { headers: string[]; rows: Array<string[]> }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[680px] table-auto border-collapse text-sm">
      <thead>
        <tr className="bg-emerald-50 text-emerald-900">
          {headers.map((h, i) => (
            <th key={i} className="border-b border-emerald-200 px-4 py-3 text-left font-medium">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="even:bg-emerald-50/30">
            {r.map((c, j) => (
              <td key={j} className="border-b border-emerald-100 px-4 py-3">{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const WorkstationConnect = () => {
  const features = [
    {
      icon: Monitor,
      title: "HDMI 4K",
      desc: "Podłącz monitor zewnętrzny i pracuj w rozdzielczości do 4K@60Hz"
    },
    {
      icon: Network,
      title: "Ethernet Gigabit",
      desc: "Stabilne, przewodowe połączenie sieciowe"
    },
    {
      icon: Dock,
      title: "4x USB-A 3.0",
      desc: "Klawiatura, mysz, drukarka, skaner — wszystko podłączone jednocześnie"
    },
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo i kontrola",
      desc: "Pełna kontrola nad dozwolonymi urządzeniami USB — zabezpieczenie przed nieautoryzowanym dostępem"
    }
  ];

  return (
    <Section id="workstation-connect" className="bg-gradient-to-b from-emerald-50/30 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-8 flex items-center gap-2">
          <Dock className="h-5 w-5 text-emerald-700"/>
          <h2 className="text-2xl font-semibold text-emerald-900">Zebra Workstation Connect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left - Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-emerald-900">
              Jedno urządzenie. Trzy funkcje. Nieskończone możliwości.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-emerald-900">Zebra Workstation Connect</strong> to innowacyjne rozwiązanie, które przekształca Zebra EM45 w pełnoprawną stację roboczą typu desktop. Wystarczy umieścić urządzenie w stacji dokującej Connect Cradle, aby uzyskać dostęp do wszystkich portów i funkcji komputera biurowego.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dzięki temu pracownicy mogą używać tego samego urządzenia w terenie jako rejestratora mobilnego, a następnie przekształcić je w pełnowartościową stację roboczą z dużym monitorem, klawiaturą i myszą — bez konieczności zakupu oddzielnych komputerów stacjonarnych.
            </p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
              <p className="text-sm text-emerald-900 font-medium">
                💡 <strong>Potraja funkcjonalność:</strong> Rejestrator + Telefon + Komputer PC
              </p>
            </div>
          </div>

          {/* Right - Placeholder for dock image */}
          <div className="relative">
            <div className="relative aspect-video bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg border-2 border-emerald-200 shadow-lg flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-emerald-700 mb-4">
                  <Dock className="w-24 h-24 mx-auto" />
                </div>
                <p className="text-sm text-emerald-900 font-medium">
                  Zdjęcie Zebra Workstation Connect
                </p>
                <p className="text-xs text-emerald-700 mt-2">
                  Connect Cradle z EM45
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mb-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-emerald-900 mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}
        <Card className="border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30">
          <CardHeader>
            <CardTitle className="text-emerald-900">Korzyści dla Nadleśnictwa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-900 mb-1">Niższe koszty</h5>
                  <p className="text-sm text-muted-foreground">
                    Eliminacja potrzeby zakupu oddzielnych komputerów stacjonarnych — mniejsze wydatki kapitałowe i operacyjne
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-900 mb-1">Oszczędność energii</h5>
                  <p className="text-sm text-muted-foreground">
                    O 50% niższe zużycie energii w porównaniu z tradycyjnymi komputerami desktop
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-900 mb-1">Większa produktywność</h5>
                  <p className="text-sm text-muted-foreground">
                    Leśnicy mogą wykonywać więcej zadań z jednym urządzeniem — mobilnie i stacjonarnie
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-900 mb-1">Prostsza infrastruktura</h5>
                  <p className="text-sm text-muted-foreground">
                    Mniej urządzeń do zarządzania, niższe koszty utrzymania i wsparcia IT
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
};

const WorkstationVsDex = () => {
  const features = [
    { feature: "Tryb pulpitu z pełnym interfejsem desktop", zebra: true, dex: true },
    { feature: "Przesuwanie aplikacji między ekranami", zebra: true, dex: false },
    { feature: "Automatyczne zachowanie aplikacji przy dokowaniu", zebra: true, dex: false },
    { feature: "Kontrola urządzeń USB (bezpieczeństwo)", zebra: true, dex: false },
    { feature: "Integracja z EMM/MDM (Android Enterprise)", zebra: true, dex: false },
    { feature: "Dedykowana stacja dokująca z pełnymi portami", zebra: true, dex: false },
  ];

  return (
    <Section id="workstation-vs-dex" className="bg-gradient-to-b from-white to-emerald-50/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
            Zebra Workstation Connect vs Samsung DeX
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Porównanie prawdziwego rozwiązania enterprise z konsumenckim dodatkiem
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <th className="px-6 py-4 text-left font-semibold">Funkcjonalność</th>
                <th className="px-6 py-4 text-center font-semibold w-40">
                  <div className="flex flex-col items-center gap-1">
                    <span>Zebra</span>
                    <span className="text-xs font-normal opacity-90">Workstation Connect</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold w-40">
                  <div className="flex flex-col items-center gap-1">
                    <span>Samsung</span>
                    <span className="text-xs font-normal opacity-90">DeX</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, i) => (
                <tr key={i} className="border-b border-emerald-100 hover:bg-emerald-50/30 transition-colors">
                  <td className="px-6 py-4 text-sm">{item.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {item.zebra ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      </div>
                    ) : (
                      <span className="text-2xl text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.dex ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      </div>
                    ) : (
                      <span className="text-2xl text-red-400">✕</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Issues with Samsung DeX */}
        <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
          <CardHeader>
            <CardTitle className="text-red-900 flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Problemy z Samsung DeX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <p className="text-red-800">
                <strong>⚠️ Brak oficjalnej stacji dokującej:</strong> {placeholders.Dex_Limits}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
};

const ProductShowcase = () => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-10 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-emerald-400">TURBODOPALANY</span>
            <br />
            <span className="text-slate-300">do pracy w lesie</span>
          </h2>
        </motion.div>

        {/* Product Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left Device - Angled */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[200px] md:h-[240px] flex items-center justify-center"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl border border-slate-600/30 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-4 bg-slate-900 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <ShieldCheck className="h-12 w-12 text-emerald-500 mx-auto mb-2 opacity-50" />
                  <p className="text-slate-400 text-xs">Zebra EM45</p>
                  <p className="text-slate-500 text-xs mt-1">Widok boczny</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Device - Front */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[240px] md:h-[280px] flex items-center justify-center z-10"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-emerald-600/30 to-emerald-800/30 rounded-3xl border-2 border-emerald-500/40 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 rounded-3xl opacity-90"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-4">
                <ShieldCheck className="h-16 w-16 text-emerald-400 mb-2" />
                <h3 className="text-white text-xl font-bold mb-1">Zebra EM45</h3>
                <p className="text-emerald-400 text-xs font-medium mb-2">Enterprise Mobile Computer</p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-slate-700/50 rounded-full text-slate-300 border border-slate-600">IP68</span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded-full text-slate-300 border border-slate-600">MIL-STD-810H</span>
                  <span className="px-2 py-1 bg-slate-700/50 rounded-full text-slate-300 border border-slate-600">5G</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Device - Angled */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[200px] md:h-[240px] flex items-center justify-center"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl border border-slate-600/30 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-4 bg-slate-900 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Battery className="h-12 w-12 text-emerald-500 mx-auto mb-2 opacity-50" />
                  <p className="text-slate-400 text-xs">Zebra EM45</p>
                  <p className="text-slate-500 text-xs mt-1">Widok tylny</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto">
            Profesjonalne urządzenie stworzone dla pracy w najtrudniejszych warunkach terenowych
          </p>
        </motion.div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent pointer-events-none"></div>
    </section>
  );
};

const ComparePhones = () => {
  const [typedText, setTypedText] = React.useState("");
  const [showBenchmarkDialog, setShowBenchmarkDialog] = React.useState(false);
  const [typingComplete, setTypingComplete] = React.useState(false);
  const [startTyping, setStartTyping] = React.useState(false);
  const summaryRef = React.useRef(null);
  
  const fullText = "A czy na pewno do pracy w terenie punkty benchmarkowe mają znaczenie?";

  // Start typing after 4 seconds of viewing the summary section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startTyping && !typingComplete) {
            // Wait 4 seconds before starting to type
            setTimeout(() => {
              setStartTyping(true);
            }, 4000);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (summaryRef.current) {
      observer.observe(summaryRef.current);
    }

    return () => {
      if (summaryRef.current) {
        observer.unobserve(summaryRef.current);
      }
    };
  }, [startTyping, typingComplete]);

  // Typewriter effect
  React.useEffect(() => {
    if (startTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50); // Speed of typing
      return () => clearTimeout(timeout);
    } else if (startTyping && typedText.length === fullText.length && !typingComplete) {
      setTypingComplete(true);
    }
  }, [typedText, startTyping, typingComplete]);

  const comparisons = [
    {
      feature: "Gotowość do pracy w rękawicach",
      zebra: "Ekran i przyciski zaprojektowane do obsługi w rękawicach i w deszczu",
      samsung: "Brak dedykowanego trybu pracy w rękawicach",
      zebraWins: true
    },
    {
      feature: "Czas pracy na baterii",
      zebra: "Do 25 godzin ciągłej pracy, szybkie ładowanie 0-50% w 30 min",
      samsung: "Około 1 dzień pracy, krótszy czas działania przy GPS i słabym zasięgu",
      zebraWins: true
    },
    {
      feature: "Odporność w terenie",
      zebra: "Konstrukcja klasy MIL-STD 810H, pełna szczelność IP65/IP68",
      samsung: "Tylko IP68, brak odporności na upadki i wstrząsy",
      zebraWins: true
    },
    {
      feature: "Przywracanie po serwisie",
      zebra: "Wystarczy zeskanować kod QR - Leśnik+ instaluje się automatycznie",
      samsung: "Ręczna konfiguracja lub wsparcie IT po każdej naprawie",
      zebraWins: true
    },
    {
      feature: "Przeznaczenie",
      zebra: "Narzędzie pracy terenowej - stworzone do lasu",
      samsung: "Smartfon konsumencki - projektowany do użytku prywatnego",
      zebraWins: true
    },
    {
      feature: "Punkty benchmark",
      zebra: "Geekbench 6: Single-Core 898, Multi-Core 2580",
      samsung: "Geekbench 6: Single-Core ~3000, Multi-Core ~9500",
      zebraWins: false
    }
  ];

  return (
    <Section id="porownanie">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-8 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700"/>
          <h2 className="text-2xl font-semibold text-emerald-900">Zebra EM45 vs smartfony Samsung (A56, S25)</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="bg-gray-100 px-6 py-4 text-left font-semibold text-gray-700 w-1/4">Cecha</th>
                <th className="bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-4 text-left font-bold text-white w-5/12">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Zebra EM45</span>
                  </div>
                </th>
                <th className="bg-gray-200 px-6 py-4 text-left font-semibold text-gray-600 w-1/3">Samsung Galaxy S25/A56</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors"
                >
                  <td className="px-6 py-5 font-medium text-gray-700 bg-gray-50/50">
                    {item.feature}
                  </td>
                  <td className={`px-6 py-5 border-l-4 ${item.zebraWins ? 'bg-emerald-50/50 border-emerald-500' : 'bg-gray-50/30 border-gray-300'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {item.zebraWins ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className={`leading-relaxed ${item.zebraWins ? 'text-emerald-900 font-medium' : 'text-gray-600 text-sm'}`}>
                        {item.zebra}
                      </p>
                    </div>
                  </td>
                  <td className={`px-6 py-5 text-sm ${item.zebraWins ? 'bg-gray-50/30 text-gray-600' : 'bg-emerald-50/50 text-emerald-900 font-medium border-l-4 border-emerald-500'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {item.zebraWins ? (
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="leading-relaxed">{item.samsung}</p>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          ref={summaryRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border-l-4 border-emerald-600"
        >
          {/* Typewriter effect */}
          {(startTyping || typedText.length > 0) && (
            <div className="flex items-center gap-6 flex-wrap">
              <p className="text-emerald-900 italic text-lg font-semibold">
                {typedText}
                {typedText.length < fullText.length && startTyping && (
                  <span className="inline-block w-0.5 h-5 bg-emerald-700 ml-1 animate-pulse" />
                )}
              </p>
              
              {/* Spacer to push button to middle */}
              {typingComplete && <div className="flex-1" />}
              
              {/* Buttons appear after typing is complete - with attention-grabbing effects */}
              {typingComplete && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  {/* Pulsing glow effect behind button */}
                  <div className="absolute inset-0 bg-emerald-400 rounded-lg blur-md opacity-40 animate-pulse" />
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Button
                      onClick={() => setShowBenchmarkDialog(true)}
                      variant="outline"
                      size="sm"
                      className="relative border-2 border-emerald-600 bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-6"
                    >
                      SPRAWDŹ
                    </Button>
                  </motion.div>
                </motion.div>
              )}
              
              {/* Spacer on the right to center button */}
              {typingComplete && <div className="flex-1" />}
            </div>
          )}
        </motion.div>

        {/* Benchmark Explanation Lightbox */}
        {showBenchmarkDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowBenchmarkDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowBenchmarkDialog(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6 pr-10">
                  🎯 Co naprawdę ma znaczenie w terenie?
                </h3>
                
                {/* Big Black Answer Box */}
                <div className="bg-black text-white p-8 rounded-xl mb-6 border-4 border-red-600 shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-black text-red-500 drop-shadow-lg">
                      ABSOLUTNIE NIE!
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  W terenie liczy się coś zupełnie innego:
                </h4>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                      🛡️
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Niezawodność w ekstremalnych warunkach</h5>
                      <p className="text-sm text-gray-700">
                        Zebra EM45 pracuje w deszczu, śniegu, upale i mrozie. Spełnia normy MIL-STD-810H i IP68. Samsung? Tylko IP68, bez certyfikacji wojskowej.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                      🔋
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Cały dzień pracy bez ładowania</h5>
                      <p className="text-sm text-gray-700">
                        25 godzin ciągłej pracy, optymalizacja zużycia energii przy słabym zasięgu. Samsung rozładowuje się szybciej przy GPS i słabym sygnale.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                      🧤
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Praca w grubych rękawicach</h5>
                      <p className="text-sm text-gray-700">
                        Ekran i przyciski zaprojektowane do obsługi w rękawicach roboczych i deszczu. Samsung wymaga delikatnego dotyku bez rękawic.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                      ⏱️
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Zero przestojów</h5>
                      <p className="text-sm text-gray-700">
                        Zebra OneCare zapewnia wymianę urządzenia tego samego dnia. Samsung? Tydzień w serwisie i praca bez urządzenia.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                      📱
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Szybkie przywracanie po serwisie</h5>
                      <p className="text-sm text-gray-700">
                        Jeden skan QR kodu i Leśnik+ instaluje się automatycznie. Samsung wymaga ręcznej konfiguracji lub wsparcia IT.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                  <h5 className="font-bold text-red-900 mb-2">⚠️ Prawda o benchmarkach</h5>
                  <p className="text-red-800 text-sm">
                    <strong>Punkty benchmarkowe to syntetyczne testy laboratoryjne</strong>, które nie mają nic wspólnego z rzeczywistą pracą w lesie. 
                    To jak porównywanie samochodów wyścigowych na papierze — na torze liczą się cyfry, ale w terenie potrzebujesz terenówki, która nie zawiedzie.
                  </p>
                  <p className="text-red-800 text-sm mt-3">
                    <strong>Wysokie wyniki = krótszy czas pracy baterii, przegrzewanie się, szybkie rozładowanie przy słabym zasięgu.</strong>
                  </p>
                  <p className="text-red-900 text-sm mt-3 font-bold">
                    ❌ Benchmarki nie mówią Ci, czy urządzenie przetrwa deszcz, upadek, całodniową pracę bez ładowania, ani czy będzie działać w rękawicach. 
                    Dla Ciebie te liczby są bez znaczenia.
                  </p>
                </div>

                <div className="bg-emerald-600 text-white p-6 rounded-lg">
                  <p className="text-lg font-bold mb-2">💡 Podsumowanie</p>
                  <p className="text-emerald-50">
                    Zebra EM45 ma niższe benchmarki, bo została zaprojektowana jako <strong>narzędzie pracy</strong>, nie zabawka do testów syntetycznych. 
                    Priorytetem jest niezawodność, wytrzymałość i długi czas pracy — nie pobijanie rekordów w aplikacjach testowych.
                  </p>
                </div>

                <div className="flex gap-3 justify-end mt-6">
                  <Button
                    onClick={() => {
                      setShowBenchmarkDialog(false);
                      setTimeout(() => {
                        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Skontaktuj się z nami
                  </Button>
                  <Button
                    onClick={() => setShowBenchmarkDialog(false)}
                    variant="outline"
                  >
                    Zamknij
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

const Features = () => {
  const items = [
    { icon: CloudRain, title: "Ekran do pracy w trudnych warunkach", desc: placeholders.Glove_Rain_Notes },
    { icon: ShieldCheck, title: "Odporność klasy przemysłowej", desc: `${placeholders.IP_EM45} / ${placeholders.MILSTD_EM45} — pełna praca w deszczu, śniegu i ekstremalnych temperaturach` },
    { icon: Satellite, title: "Precyzyjne GNSS", desc: placeholders.GNSS_info },
    { icon: Battery, title: "Długi czas pracy", desc: `Bateria ${placeholders.BATT_EM45_mAh} zapewnia pełny dzień pracy w terenie bez konieczności ładowania` },
    { icon: Cpu, title: "StageNow - szybka konfiguracja", desc: "Narzędzie Zebra StageNow umożliwia szybkie wdrożenie i konfigurację urządzeń bez konieczności ręcznej konfiguracji każdego rejestratora" },
    { icon: Maximize2, title: "Kompaktowe wymiary", desc: placeholders.Size_EM45 },
  ];

  return (
    <Section id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-8 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-700"/>
          <h2 className="text-2xl font-semibold text-emerald-900">Kluczowe cechy rejestratora Zebra EM45</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 inline-block rounded-lg bg-emerald-100 p-3 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {item.desc}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

const TCOCalculator = () => {
  const [numDevices, setNumDevices] = React.useState(12); // Average per Nadleśnictwo
  const [repairRate, setRepairRate] = React.useState(30); // % devices needing repair per year
  const [years, setYears] = React.useState(3);
  const [showOneCareDetails, setShowOneCareDetails] = React.useState(false);

  // Prices
  const zebraPrice = 2499;
  const zebraServicePrice = 499;
  const samsungPrice = 2500;
  
  // Lifespans
  const zebraLifespan = 5;
  const samsungLifespan = 3;

  // Repair costs for Samsung (average)
  const samsungScreenRepair = 800; // zł
  const samsungOtherRepair = 500; // zł avg for ports, motherboard etc

  // Calculate costs
  const zebraTotalCost = (zebraPrice + zebraServicePrice) * numDevices;
  
  // Samsung needs replacement after 3 years if timeframe > 3
  const samsungReplacements = Math.floor(years / samsungLifespan);
  const samsungDevicesCost = samsungPrice * numDevices * (1 + samsungReplacements);
  
  // Samsung repair costs (no warranty coverage)
  const devicesNeedingRepair = Math.floor(numDevices * (repairRate / 100));
  const samsungRepairCosts = devicesNeedingRepair * samsungScreenRepair * years;
  
  const samsungTotalCost = samsungDevicesCost + samsungRepairCosts;
  
  const savings = samsungTotalCost - zebraTotalCost;
  const savingsPercent = ((savings / samsungTotalCost) * 100).toFixed(0);

  return (
    <Section id="tco" className="bg-gradient-to-b from-white to-emerald-50/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-3">
            Kalkulator całkowitego kosztu posiadania
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Domyślnie dla 12 urządzeń - średnia na Nadleśnictwo. Wszystkie ceny netto.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto">
          <CardContent className="pt-6">
            {/* Sliders - larger fonts */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Number of devices */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-base font-semibold">Urządzenia</Label>
                  <span className="text-2xl font-bold text-emerald-700">{numDevices}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={numDevices}
                  onChange={(e) => setNumDevices(Number(e.target.value))}
                  className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #059669 0%, #059669 ${numDevices}%, #d1fae5 ${numDevices}%, #d1fae5 100%)`
                  }}
                />
              </div>

              {/* Repair rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-base font-semibold">Awarie/rok</Label>
                  <span className="text-2xl font-bold text-emerald-700">{repairRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={repairRate}
                  onChange={(e) => setRepairRate(Number(e.target.value))}
                  className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #059669 0%, #059669 ${repairRate}%, #d1fae5 ${repairRate}%, #d1fae5 100%)`
                  }}
                />
              </div>

              {/* Years */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label className="text-base font-semibold">Okres</Label>
                  <span className="text-2xl font-bold text-emerald-700">{years} {years === 1 ? 'rok' : 'lata'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #059669 0%, #059669 ${(years - 1) * 25}%, #d1fae5 ${(years - 1) * 25}%, #d1fae5 100%)`
                  }}
                />
              </div>
            </div>

            {/* Results - larger cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Zebra */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-lg border-2 border-emerald-300">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-6 w-6 text-emerald-700" />
                  <h3 className="text-lg font-bold text-emerald-900">Zebra EM45</h3>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800 mb-4">
                  <div className="flex justify-between">
                    <span>Urządzenie + kontrakt serwisowy (3 lata):</span>
                    <span className="font-semibold">{(zebraPrice + zebraServicePrice).toLocaleString('pl-PL')} zł netto</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Żywotność:</span>
                    <span className="font-semibold">{zebraLifespan} lat</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Naprawy:</span>
                    <span className="font-semibold text-emerald-600">0 zł</span>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-emerald-300">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-emerald-900">Koszt całkowity:</span>
                    <span className="text-2xl font-bold text-emerald-700">
                      {zebraTotalCost.toLocaleString('pl-PL')} zł netto
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-lg border-2 border-gray-300">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="h-6 w-6 text-gray-700" />
                  <h3 className="text-lg font-bold text-gray-900">Telefon komórkowy</h3>
                </div>
                
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Urządzenie:</span>
                    <span className="font-semibold">~{samsungPrice.toLocaleString('pl-PL')} zł netto</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Żywotność:</span>
                    <span className="font-semibold">{samsungLifespan} lata</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Naprawy:</span>
                    <span className="font-semibold text-red-600">~{samsungRepairCosts.toLocaleString('pl-PL')} zł netto</span>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-900">Koszt całkowity:</span>
                    <span className="text-2xl font-bold text-red-600">
                      {samsungTotalCost.toLocaleString('pl-PL')} zł netto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Banner - larger text */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-5 rounded-lg text-center">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div>
                  <p className="text-base mb-1">💰 Oszczędności z Zebra EM45:</p>
                  <p className="text-3xl font-bold">
                    {savings.toLocaleString('pl-PL')} zł netto
                  </p>
                </div>
                <div className="text-emerald-100 text-base">
                  To {savingsPercent}% oszczędności w porównaniu do telefonu!
                </div>
              </div>
            </div>

            {/* Zebra OneCare Essential Info Box - Collapsible */}
            <div className="mt-6 bg-white border-2 border-emerald-500 rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setShowOneCareDetails(!showOneCareDetails)}
                className="w-full p-6 flex items-center justify-between hover:bg-emerald-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-emerald-900">
                      Zebra OneCare - Kontrakt serwisowy
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Kliknij aby {showOneCareDetails ? 'zwinąć' : 'rozwinąć'} szczegóły
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: showOneCareDetails ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: showOneCareDetails ? "auto" : 0,
                  opacity: showOneCareDetails ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Zebra OneCare Essential</strong> to profesjonalny kontrakt serwisowy zapewniający kompleksową ochronę urządzeń Zebra. 
                    W cenie urządzenia otrzymujesz pakiet usług, który w przypadku telefonów konsumenckich kosztowałby dodatkowo tysiące złotych.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <h4 className="font-semibold text-emerald-900">Wszystkie naprawy pokryte</h4>
                      </div>
                      <p className="text-sm text-gray-700">
                        Ekran, porty, płyta główna, bateria - każda naprawa bez dodatkowych kosztów
                      </p>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <h4 className="font-semibold text-emerald-900">Advance Exchange</h4>
                      </div>
                      <p className="text-sm text-gray-700">
                        Wymiana urządzenia w 3 dni robocze (8x5) - zero przestojów w pracy
                      </p>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <h4 className="font-semibold text-emerald-900">Nielimitowane baterie</h4>
                      </div>
                      <p className="text-sm text-gray-700">
                        Bezpłatna wymiana baterii przez cały okres umowy - zawsze pełna moc
                      </p>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <h4 className="font-semibold text-emerald-900">Wsparcie techniczne</h4>
                      </div>
                      <p className="text-sm text-gray-700">
                        Dostęp do ekspertów Zebra w godzinach 8:00-17:00 (dni robocze)
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg">
                    <p className="font-bold text-center">
                      💡 Koszt OneCare Essential: tylko 499 zł/3 lata - mniej niż 1 naprawa ekranu telefonu!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Animated warning - appears only when years > 3 */}
            {years > samsungLifespan && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <p className="text-sm text-amber-900 font-medium">
                      Telefon wymaga wymiany po {samsungLifespan} latach, podczas gdy Zebra działa przez {zebraLifespan} lat
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  );
};

const ForestBanner = () => (
  <Section id="forest-banner" className={`${forestBg} relative overflow-hidden py-8 md:py-10`}>
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pine-banner" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 10 L75 35 L45 35 Z" fill="rgba(34,139,87,0.15)" />
            <path d="M60 30 L85 70 L35 70 Z" fill="rgba(34,139,87,0.10)" />
            <rect x="58" y="70" width="4" height="20" fill="rgba(34,139,87,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pine-banner)" />
      </svg>
    </div>

    <div className="relative text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-3">
          Niezawodność w każdych warunkach
        </h2>
        <p className="text-lg text-emerald-900/80 max-w-2xl mx-auto">
          Zebra EM45 - profesjonalne narzędzie stworzone dla pracy w lesie
        </p>
      </motion.div>
    </div>
  </Section>
);

const Availability = () => {
  const [showTCOLightbox, setShowTCOLightbox] = React.useState(false);
  const [showOneCareDetailsLightbox, setShowOneCareDetailsLightbox] = React.useState(false);
  const [numDevices, setNumDevices] = React.useState(12);
  const [repairRate, setRepairRate] = React.useState(30);
  const [years, setYears] = React.useState(3);

  // TCO Calculation
  const zebraPrice = 2499;
  const zebraServicePrice = 499;
  const samsungPrice = 2500;
  const zebraLifespan = 5;
  const samsungLifespan = 3;
  const samsungScreenRepair = 800;
  
  const zebraTotalCost = (zebraPrice + zebraServicePrice) * numDevices;
  const samsungReplacements = Math.floor(years / samsungLifespan);
  const samsungDevicesCost = samsungPrice * numDevices * (1 + samsungReplacements);
  const devicesNeedingRepair = Math.floor(numDevices * (repairRate / 100));
  const samsungRepairCosts = devicesNeedingRepair * samsungScreenRepair * years;
  const samsungTotalCost = samsungDevicesCost + samsungRepairCosts;
  const savings = samsungTotalCost - zebraTotalCost;
  const savingsPercent = ((savings / samsungTotalCost) * 100).toFixed(0);

  return (
    <Section id="dostepnosc">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.25)" }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/30 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            {/* Subtle forest decorations */}
            <div className="absolute top-2 right-2 opacity-5">
              <Trees className="h-20 w-20 text-emerald-700" />
            </div>
            <div className="absolute bottom-2 left-2 opacity-5">
              <Trees className="h-16 w-16 text-emerald-700" />
            </div>
            
            <CardContent className="pt-6 pb-6 relative z-10">
              <div className="text-center space-y-4">
                {/* Floating forest icon */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 shadow-md mb-2"
                >
                  <Trees className="h-7 w-7 text-emerald-700" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-emerald-900">
                  Zebra EM45 dostępna od ręki
                </h3>
                
                <p className="text-base md:text-lg text-emerald-800 font-medium max-w-2xl mx-auto">
                  w Zakładzie Usługowo Produkcyjnym w Łodzi
                </p>

                <div className="pt-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      onClick={() => setShowTCOLightbox(true)}
                      className="bg-emerald-700 hover:bg-emerald-800 shadow-lg"
                    >
                      <Calculator className="h-5 w-5 mr-2" />
                      Ile kosztuje?
                    </Button>
                  </motion.div>
                </div>

                {/* Decorative pine tree icons */}
                <div className="flex justify-center gap-2 pt-2 opacity-20">
                  <Trees className="h-4 w-4 text-emerald-600" />
                  <Trees className="h-5 w-5 text-emerald-600" />
                  <Trees className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* TCO Calculator Lightbox */}
      {showTCOLightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowTCOLightbox(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowTCOLightbox(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* TCO Calculator Content */}
            <div className="p-6 md:p-8">
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900 mb-2">
                  Kalkulator całkowitego kosztu posiadania
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Domyślnie dla 12 urządzeń - średnia na Nadleśnictwo. Wszystkie ceny netto.
                </p>
              </div>

              {/* Sliders */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-base font-semibold">Urządzenia</Label>
                    <span className="text-2xl font-bold text-emerald-700">{numDevices}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={numDevices}
                    onChange={(e) => setNumDevices(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #059669 0%, #059669 ${numDevices}%, #d1fae5 ${numDevices}%, #d1fae5 100%)`
                    }}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-base font-semibold">Awarie/rok</Label>
                    <span className="text-2xl font-bold text-emerald-700">{repairRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={repairRate}
                    onChange={(e) => setRepairRate(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #059669 0%, #059669 ${repairRate}%, #d1fae5 ${repairRate}%, #d1fae5 100%)`
                    }}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-base font-semibold">Okres</Label>
                    <span className="text-2xl font-bold text-emerald-700">{years} {years === 1 ? 'rok' : 'lata'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #059669 0%, #059669 ${(years - 1) * 25}%, #d1fae5 ${(years - 1) * 25}%, #d1fae5 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-lg border-2 border-emerald-300">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="h-6 w-6 text-emerald-700" />
                    <h3 className="text-lg font-bold text-emerald-900">Zebra EM45</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm text-emerald-800 mb-4">
                    <div className="flex justify-between">
                      <span>Urządzenie + kontrakt serwisowy (3 lata):</span>
                      <span className="font-semibold">{(zebraPrice + zebraServicePrice).toLocaleString('pl-PL')} zł netto</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Żywotność:</span>
                      <span className="font-semibold">{zebraLifespan} lat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Naprawy:</span>
                      <span className="font-semibold text-emerald-600">0 zł</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t-2 border-emerald-300">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-emerald-900">Koszt całkowity:</span>
                      <span className="text-2xl font-bold text-emerald-700">
                        {zebraTotalCost.toLocaleString('pl-PL')} zł netto
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-lg border-2 border-gray-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="h-6 w-6 text-gray-700" />
                    <h3 className="text-lg font-bold text-gray-900">Telefon komórkowy</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex justify-between">
                      <span>Urządzenie:</span>
                      <span className="font-semibold">~{samsungPrice.toLocaleString('pl-PL')} zł netto</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Żywotność:</span>
                      <span className="font-semibold">{samsungLifespan} lata</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between mb-1">
                        <span>Naprawy (ekran, porty, płyta):</span>
                        <span className="font-semibold text-red-600">~{samsungRepairCosts.toLocaleString('pl-PL')} zł netto</span>
                      </div>
                      <p className="text-xs text-gray-600 italic">
                        Średnio 3 urządzenia × ~800 zł/naprawa × 3 lata. Brak kontraktu serwisowego = wszystkie naprawy płatne.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t-2 border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-gray-900">Koszt całkowity:</span>
                      <span className="text-2xl font-bold text-red-600">
                        {samsungTotalCost.toLocaleString('pl-PL')} zł netto
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Banner */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-5 rounded-lg text-center mb-4">
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <div>
                    <p className="text-base mb-1">💰 Oszczędności z Zebra EM45:</p>
                    <p className="text-3xl font-bold">
                      {savings.toLocaleString('pl-PL')} zł netto
                    </p>
                  </div>
                  <div className="text-emerald-100 text-base">
                    To {savingsPercent}% oszczędności w porównaniu do telefonu!
                  </div>
                </div>
              </div>

              {/* Zebra OneCare Essential Info Box - Collapsible */}
              <div className="mb-6 bg-white border-2 border-emerald-500 rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => setShowOneCareDetailsLightbox(!showOneCareDetailsLightbox)}
                  className="w-full p-6 flex items-center justify-between hover:bg-emerald-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-emerald-900">
                        Zebra OneCare - Kontrakt serwisowy
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Kliknij aby {showOneCareDetailsLightbox ? 'zwinąć' : 'rozwinąć'} szczegóły
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: showOneCareDetailsLightbox ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: showOneCareDetailsLightbox ? "auto" : 0,
                    opacity: showOneCareDetailsLightbox ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 mb-4">
                      <strong>Zebra OneCare Essential</strong> to profesjonalny kontrakt serwisowy zapewniający kompleksową ochronę urządzeń Zebra. 
                      W cenie urządzenia otrzymujesz pakiet usług, który w przypadku telefonów konsumenckich kosztowałby dodatkowo tysiące złotych.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-emerald-700 font-bold">✓</span>
                          <h4 className="font-semibold text-emerald-900">Wszystkie naprawy pokryte</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          Ekran, porty, płyta główna, bateria - każda naprawa bez dodatkowych kosztów
                        </p>
                      </div>
                      
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-emerald-700 font-bold">✓</span>
                          <h4 className="font-semibold text-emerald-900">Advance Exchange</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          Wymiana urządzenia w 3 dni robocze (8x5) - zero przestojów w pracy
                        </p>
                      </div>
                      
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-emerald-700 font-bold">✓</span>
                          <h4 className="font-semibold text-emerald-900">Nielimitowane baterie</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          Bezpłatna wymiana baterii przez cały okres umowy - zawsze pełna moc
                        </p>
                      </div>
                      
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-emerald-700 font-bold">✓</span>
                          <h4 className="font-semibold text-emerald-900">Wsparcie techniczne</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                          Dostęp do ekspertów Zebra w godzinach 8:00-17:00 (dni robocze)
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg">
                      <p className="font-bold text-center">
                        💡 Koszt OneCare Essential: tylko 499 zł/3 lata - mniej niż 1 naprawa ekranu telefonu!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Warning if years > 3 */}
              {years > samsungLifespan && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden"
                >
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚠️</span>
                      <p className="text-sm text-amber-900 font-medium">
                        Telefon wymaga wymiany po {samsungLifespan} latach, podczas gdy Zebra działa przez {zebraLifespan} lat
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
};

const Contact = () => {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <Section id="kontakt">
      <div className="mb-6 flex items-center gap-2">
        <MousePointerClick className="h-5 w-5 text-emerald-700"/>
        <h2 className="text-2xl font-semibold text-emerald-900">Formularz kontaktowy</h2>
      </div>
      
      {formState === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg bg-emerald-50 p-8 text-center"
        >
          <div className="mb-4 text-6xl">✓</div>
          <h3 className="mb-2 text-xl font-semibold text-emerald-900">Dziękujemy!</h3>
          <p className="text-sm text-muted-foreground">Skontaktujemy się w ciągu 24h.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="name">Imię i nazwisko *</Label>
            <Input id="name" required disabled={formState === 'submitting'} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">E-mail *</Label>
            <Input id="email" type="email" required disabled={formState === 'submitting'} />
          </div>
          <div className="grid gap-3">
  <Label htmlFor="forestDistrict">Nazwa Nadleśnictwa</Label>
  <input 
    id="forestDistrict" 
    name="forestDistrict"
    disabled={formState === 'submitting'} 
    className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
  />
</div>

<div className="grid gap-3">
  <Label htmlFor="phone">Numer telefonu</Label>
  <input 
    id="phone" 
    name="phone"
    type="tel"
    disabled={formState === 'submitting'} 
    className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:border-emerald-500 focus:outline-none"
  />
</div>
          <div className="md:col-span-2 grid gap-3">
            <Label htmlFor="message">Wiadomość</Label>
            <Textarea id="message" rows={5} disabled={formState === 'submitting'} />
          </div>
          <div className="md:col-span-2">
<Button type="submit" disabled={formState === 'submitting'} className="bg-emerald-600 hover:bg-emerald-700">              {formState === 'submitting' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
            </Button>
          </div>
        </form>
      )}
    </Section>
  );
};
const Footer = () => (
  <footer className="mt-10 border-t bg-gradient-to-b from-white to-emerald-50/30 py-10">
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left - Company info */}
        <div className="text-left">
          <div className="text-base font-semibold text-emerald-900">{placeholders.Company_Name}</div>
          <div className="text-sm text-muted-foreground">{placeholders.Company_Address}</div>
        </div>
        
        {/* Center - Privacy link */}
        <div className="text-center">
          <a href="#" className="text-sm text-emerald-700 hover:underline">
            Polityka prywatności
          </a>
        </div>
        
        {/* Right - Trademark */}
        <div className="text-right">
          <div className="text-xs text-muted-foreground">
            Zebra i logo Zebra są znakami towarowymi<br />zastrzeżonymi przez Zebra Technologies Corp.
          </div>
        </div>
      </div>
      
      {/* Bottom - Copyright */}
      <div className="text-center text-xs text-muted-foreground pt-6 mt-6 border-t border-emerald-100">
        © {new Date().getFullYear()} {placeholders.Company_Name}. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default function EM45Landing() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setShowScrollTop(currentScroll > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed left-0 top-0 z-[60] h-1 bg-emerald-600 transition-all" style={{ width: `${scrollProgress}%` }} />
      
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <Trees className="h-5 w-5 text-emerald-700"/>
            <span className="font-semibold">Zebra EM45</span>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden gap-4 md:flex text-sm">
              <a className="hover:underline hover:text-emerald-700" href="#features">Cechy</a>
              <a className="hover:underline hover:text-emerald-700" href="#workstation-connect">Stacja dokująca</a>
              <a className="hover:underline hover:text-emerald-700" href="#porownanie">Porównanie</a>
              <a className="hover:underline hover:text-emerald-700" href="#dostepnosc">Dostępność</a>
              <a className="hover:underline hover:text-emerald-700" href="#kontakt">Kontakt</a>
            </nav>
            
            <Button asChild size="sm" className="hidden md:inline-flex hover:scale-105 bg-emerald-600 hover:bg-emerald-700">
  <a href="#kontakt">Zapytaj</a>
</Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-emerald-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`w-full h-0.5 bg-emerald-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}/>
              <span className={`w-full h-0.5 bg-emerald-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </div>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t bg-white px-4 py-3"
          >
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Cechy</a>
              <a href="#workstation-connect" onClick={() => setMobileMenuOpen(false)}>Stacja dokująca</a>
              <a href="#porownanie" onClick={() => setMobileMenuOpen(false)}>Porównanie</a>
              <a href="#dostepnosc" onClick={() => setMobileMenuOpen(false)}>Dostępność</a>
              <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        <Hero />
        <Features />
        <WorkstationConnect />
        <WorkstationVsDex />
        <ProductShowcase />
        <ComparePhones />
        <ForestBanner />
        <Availability />
        <Contact />
      </main>

      <Footer />
      
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-600 p-3 text-white shadow-lg hover:bg-emerald-700"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </div>
  );
}