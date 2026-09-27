import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { FormEvent, useMemo, useState } from "react";
import {
  Award,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Scissors,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import heroImage from "@/assets/salon-hero.jpg";
import interiorImage from "@/assets/salon-interior.jpg";
import teamImage from "@/assets/salon-team.jpg";
import galleryImage from "@/assets/salon-gallery.jpg";

const phone = "+919876543210";
const whatsapp = "919876543210";

const services = [
  {
    icon: Scissors,
    title: "Professional Haircut",
    description:
      "Classic se contemporary cuts, aapke face aur style ke hisaab se.",
    price: "₹200",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Beard Trim & Shaping",
    description:
      "Sharp lines, balanced shape aur expert beard maintenance.",
    price: "₹150",
    duration: "20 min",
  },
  {
    icon: Users,
    title: "Head & Shoulder Massage",
    description:
      "Stress aur tension release karne wala relaxing massage.",
    price: "₹100",
    duration: "15 min",
  },
  {
    icon: Award,
    title: "Hair Coloring",
    description:
      "Premium products ke saath professional, lasting colour.",
    price: "₹500",
    duration: "60 min",
  },
  {
    icon: Scissors,
    title: "Traditional Wet Shave",
    description:
      "Hot towel preparation ke saath classic straight-razor shave.",
    price: "₹200",
    duration: "25 min",
  },
  {
    icon: Sparkles,
    title: "Facial & Grooming",
    description:
      "Fresh, healthy skin ke liye complete facial care.",
    price: "₹300",
    duration: "45 min",
  },
];

const prices = [
  ["Standard Haircut", "₹200", "30 min", "Regular haircut"],
  ["Premium Haircut", "₹300", "40 min", "Designer / trendy cut"],
  ["Kids Haircut", "₹150", "25 min", "Child-friendly service"],
  ["Beard Trim", "₹150", "20 min", "Complete trimming"],
  ["Head Massage", "₹100", "15 min", "Relaxing therapy"],
  ["Wet Shaving", "₹200", "25 min", "Traditional method"],
  ["Hair Coloring", "₹500", "60 min", "Full hair coloring"],
  ["Facial Treatment", "₹300", "45 min", "Complete facial care"],
];

const barbers = [
  {
    name: "Raj Kumar",
    role: "Master Barber & Founder",
    exp: "18 years",
    spec: "Hair Design · Beard Sculpting",
    bio: "Modern cuts aur traditional techniques mein master craftsmanship.",
  },
  {
    name: "Arjun Singh",
    role: "Senior Barber",
    exp: "12 years",
    spec: "Premium Cuts · Coloring",
    bio: "Latest trends aur precision celebrity-style cuts ke expert.",
  },
  {
    name: "Vikram Patel",
    role: "Styling Specialist",
    exp: "8 years",
    spec: "Fade Cuts · Hair Treatment",
    bio: "Clean fades aur contemporary styling ke specialist.",
  },
  {
    name: "Mohit Sharma",
    role: "Grooming Expert",
    exp: "6 years",
    spec: "Wet Shaving · Facial Care",
    bio: "Traditional shaving aur complete grooming care ke expert.",
  },
];

const reviews = [
  [
    "Amazing experience! Best haircut I've had in years. Professional barbers aur welcoming atmosphere.",
    "Aditya Gupta",
    "2 weeks ago",
  ],
  [
    "Great service and reasonable prices. Barber ne meri preference samajhkar bilkul perfect result diya.",
    "Priya Sharma",
    "3 weeks ago",
  ],
  [
    "Consistent quality and friendly staff. Do saal se aa raha hoon aur kabhi disappointed nahi hua.",
    "Rohit Verma",
    "1 week ago",
  ],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Professional Barber Shop & Salon in Jaipur | Royal Cut",
      },
      {
        name: "description",
        content:
          "Premium haircuts, beard styling, wet shaving and grooming services in Jaipur. Book your Royal Cut appointment online.",
      },
      {
        property: "og:title",
        content: "Royal Cut Barber Studio — Jaipur",
      },
      {
        property: "og:description",
        content:
          "Premium grooming, expert barbers and easy online appointment booking in Jaipur.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Royal Cut Barber Studio",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24, C-Scheme, Ashok Marg",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302001",
          },
          telephone: phone,
          openingHours: [
            "Mo-Fr 09:00-20:00",
            "Sa 08:00-21:00",
            "Su 10:00-19:00",
          ],
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: Index,
});

function SectionTitle({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>

      <h2
        className={`text-3xl font-bold sm:text-4xl ${
          light
            ? "text-primary-foreground"
            : "text-foreground"
        }`}
      >
        {title}
      </h2>

      {sub && (
        <p
          className={`mt-3 text-base ${
            light
              ? "text-primary-foreground/75"
              : "text-muted-foreground"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  // Appointment booking states
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "booking" | "success" | "error"
  >("idle");

  const today = useMemo(
    () => new Date().toISOString().slice(0, 10),
    []
  );

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  /*
   * APPOINTMENT BOOKING
   *
   * Flow:
   * 1. Read form data
   * 2. Save appointment to Supabase
   * 3. Show success message
   * 4. DO NOT open WhatsApp
   */
  const submitBooking = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const date = String(data.get("date") || "");
    const time = String(data.get("time") || "");
    const barber = String(data.get("barber") || "");
    const serviceValue = String(data.get("service") || "");
    const name = String(data.get("name") || "");
    const customerPhone = String(
      data.get("phone") || ""
    );
    const email = String(data.get("email") || "");
    const requests = String(
      data.get("requests") || ""
    );

    // Start loading state
    setBookingStatus("booking");

    /*
     * The service select contains values such as:
     *
     * Professional Haircut — ₹200
     *
     * We separate the service name and price.
     */
    const serviceParts = serviceValue.split(" — ₹");

    const service = serviceParts[0] || "";
    const servicePrice = Number(serviceParts[1]) || 0;

    try {
      /*
       * Save appointment to Supabase.
       */
      const { error } = await supabase
        .from("appointments")
        .insert({
          appointment_date: date,
          appointment_time: time,
          barber: barber,
          service: service,
          service_price: servicePrice,
          full_name: name,
          phone: customerPhone,
          email: email,
          special_requests: requests || null,
        });

      /*
       * Supabase error
       */
      if (error) {
        console.error(
          "Supabase booking error:",
          error
        );

        setBookingStatus("error");

        return;
      }

      /*
       * Appointment successfully saved.
       *
       * Reset form and show confirmation.
       */
      form.reset();

      setBookingStatus("success");

      /*
       * Automatically scroll slightly toward
       * the confirmation message.
       */
      setTimeout(() => {
        document
          .getElementById("booking-success")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
    } catch (error) {
      console.error(
        "Unexpected booking error:",
        error
      );

      setBookingStatus("error");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* TOP BAR */}
      <div className="bg-navy text-primary-foreground">
        <div className="section-shell flex min-h-10 items-center justify-between gap-3 py-2 text-xs sm:text-sm">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:text-gold"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">
              Call:
            </span>
            +91 98765 43210
          </a>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 hover:text-gold sm:flex"
          >
            <MessageCircle className="size-4" />
            WhatsApp us
          </a>

          <Button
            size="sm"
            variant="gold"
            onClick={() => scrollTo("booking")}
          >
            Book now
          </Button>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="section-shell flex h-18 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="text-left"
            aria-label="Royal Cut home"
          >
            <span className="block font-display text-xl font-extrabold text-navy">
              ROYAL <span className="text-gold">CUT</span>
            </span>

            <span
              className="block text-[9px] font-bold uppercase text-muted-foreground"
              style={{ letterSpacing: "0.14em" }}
            >
              Premium Grooming Experience
            </span>
          </button>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {[
              "Home",
              "Services",
              "About",
              "Gallery",
              "Team",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  scrollTo(item.toLowerCase())
                }
                className="text-sm font-semibold text-foreground transition-colors hover:text-gold"
              >
                {item}
              </button>
            ))}

            <Button
              variant="gold"
              onClick={() => scrollTo("booking")}
            >
              Book Appointment
            </Button>
          </nav>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {menuOpen && (
          <nav className="border-t bg-background px-5 py-4 lg:hidden">
            {[
              "Home",
              "Services",
              "About",
              "Gallery",
              "Team",
              "Contact",
              "Booking",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  scrollTo(item.toLowerCase())
                }
                className="block min-h-11 w-full border-b border-border py-3 text-left font-semibold"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-[78vh] items-center overflow-hidden bg-navy"
        >
          <img
            src={heroImage}
            alt="Royal Cut premium barber studio interior"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover object-center"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-navy/70" />

          <div className="section-shell relative z-10 py-24 text-center text-primary-foreground sm:text-left">
            <div className="max-w-3xl">
              <p
                className="mb-5 text-xs font-bold uppercase text-gold"
                style={{ letterSpacing: "0.18em" }}
              >
                Jaipur's premium grooming destination
              </p>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                Look sharp.
                <br />
                <span className="text-gold">
                  Feel unmistakable.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                Classic craftsmanship, modern style aur ek aisa
                experience jo sirf haircut se kahin zyada hai.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
                <Button
                  size="xl"
                  variant="gold"
                  onClick={() => scrollTo("booking")}
                >
                  <CalendarDays />
                  Book your appointment
                </Button>

                <Button
                  size="xl"
                  variant="heroOutline"
                  asChild
                >
                  <a href={`tel:${phone}`}>
                    <Phone />
                    Call +91 98765 43210
                  </a>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm sm:justify-start">
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-gold text-gold" />
                  4.9 customer rating
                </span>

                <span className="flex items-center gap-2">
                  <Award className="size-4 text-gold" />
                  15+ years experience
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="section-pad bg-muted"
        >
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src={interiorImage}
                alt="Bright and luxurious Royal Cut salon interior"
                width={1200}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              />

              <div className="absolute -bottom-5 right-5 rounded-md bg-gold p-5 text-gold-foreground shadow-lift">
                <strong className="block font-display text-3xl">
                  15+
                </strong>

                <span className="text-xs font-bold uppercase">
                  Years of craft
                </span>
              </div>
            </div>

            <div>
              <p className="eyebrow">Our story</p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                About Royal Cut
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Welcome to Royal Cut, your destination for premium
                grooming services. 15 saal se hum modern cuts,
                traditional shaving aur personalised grooming mein
                Jaipur ke customers ka trust earn kar rahe hain.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                Hamari mission simple hai: har guest ko comfortable
                experience aur perfectly groomed look dena.
                Traditional craftsmanship ko modern technique ke
                saath combine karke hum confidence create karte hain.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "15+ Years Experience",
                  "Certified Barbers",
                  "Premium Products",
                  "100% Satisfaction",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-md border bg-card p-3 text-sm font-semibold shadow-soft"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-navy">
                      <Check className="size-4" />
                    </span>

                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="section-pad"
        >
          <div className="section-shell">
            <SectionTitle
              eyebrow="What we do"
              title="Grooming, elevated"
              sub="Har style ke liye complete grooming solutions."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(
                ({ icon: Icon, ...s }, i) => (
                  <article
                    key={s.title}
                    className="group rounded-lg border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-md bg-navy text-gold">
                        <Icon />
                      </span>

                      <span className="font-display text-5xl font-bold text-muted">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">
                      {s.title}
                    </h3>

                    <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between border-t pt-5">
                      <div>
                        <strong className="font-display text-2xl text-navy">
                          {s.price}
                        </strong>

                        <span className="ml-2 text-xs text-muted-foreground">
                          {s.duration}
                        </span>
                      </div>

                      <Button
                        variant="link"
                        onClick={() =>
                          scrollTo("booking")
                        }
                      >
                        Book
                        <ChevronRight />
                      </Button>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section-pad bg-navy text-primary-foreground">
          <div className="section-shell">
            <SectionTitle
              eyebrow="No surprises"
              title="Transparent pricing"
              sub="Premium service, fair price — hamesha."
              light
            />

            <div className="overflow-x-auto rounded-lg border border-primary-foreground/15">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-primary-foreground/10 text-xs uppercase text-gold">
                  <tr>
                    {[
                      "Service",
                      "Price",
                      "Duration",
                      "Description",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {prices.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-primary-foreground/10 hover:bg-primary-foreground/5"
                    >
                      {row.map((cell, i) => (
                        <td
                          key={cell}
                          className={`px-5 py-4 text-sm ${
                            i === 1
                              ? "font-bold text-gold"
                              : "text-primary-foreground/80"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-2 text-center text-xs text-primary-foreground/65 md:grid-cols-3">
              <p>Complimentary beverage included</p>
              <p>Regular & group discounts available</p>
              <p>Walk-ins welcome · Appointments preferred</p>
            </div>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section
          id="booking"
          className="section-pad bg-muted"
        >
          <div className="section-shell">
            <SectionTitle
              eyebrow="Reserve your chair"
              title="Book your appointment"
              sub="Details fill karein aur apni appointment confirm karein."
            />

            <form
              onSubmit={submitBooking}
              className="mx-auto max-w-5xl rounded-lg border bg-card p-5 shadow-lift sm:p-8"
            >
              <div className="grid gap-5 md:grid-cols-3">
                {/* DATE */}
                <label>
                  <span className="field-label">
                    Select Date *
                  </span>

                  <Input
                    required
                    name="date"
                    type="date"
                    min={today}
                  />
                </label>

                {/* TIME */}
                <label>
                  <span className="field-label">
                    Select Time *
                  </span>

                  <select
                    required
                    name="time"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">
                      Choose time
                    </option>

                    {[
                      "9:00 AM",
                      "9:30 AM",
                      "10:00 AM",
                      "11:30 AM",
                      "1:00 PM",
                      "3:30 PM",
                      "5:00 PM",
                      "7:30 PM",
                    ].map((x) => (
                      <option key={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </label>

                {/* BARBER */}
                <label>
                  <span className="field-label">
                    Select Barber *
                  </span>

                  <select
                    required
                    name="barber"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option>
                      Any Available
                    </option>

                    {barbers.map((x) => (
                      <option key={x.name}>
                        {x.name} — {x.role}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {/* SERVICE */}
                <label>
                  <span className="field-label">
                    Service Required *
                  </span>

                  <select
                    required
                    name="service"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">
                      Choose service
                    </option>

                    {services.map((x) => (
                      <option
                        key={x.title}
                        value={`${x.title} — ${x.price}`}
                      >
                        {x.title} — {x.price}
                      </option>
                    ))}
                  </select>
                </label>

                {/* NAME */}
                <label>
                  <span className="field-label">
                    Full Name *
                  </span>

                  <Input
                    required
                    name="name"
                    placeholder="Enter your full name"
                  />
                </label>

                {/* PHONE */}
                <label>
                  <span className="field-label">
                    Phone Number *
                  </span>

                  <Input
                    required
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Your 10-digit number"
                  />
                </label>

                {/* EMAIL */}
                <label>
                  <span className="field-label">
                    Email Address *
                  </span>

                  <Input
                    required
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </label>

                {/* REQUESTS */}
                <label className="md:col-span-2">
                  <span className="field-label">
                    Special Requests
                  </span>

                  <Textarea
                    name="requests"
                    maxLength={200}
                    placeholder="Any special instructions or preferences?"
                  />
                </label>
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  type="submit"
                  size="xl"
                  variant="gold"
                  disabled={bookingStatus === "booking"}
                >
                  <CalendarDays />

                  {bookingStatus === "booking"
                    ? "Booking Appointment..."
                    : "Confirm Appointment"}
                </Button>

                <Button
                  type="reset"
                  size="xl"
                  variant="outline"
                  onClick={() =>
                    setBookingStatus("idle")
                  }
                >
                  Clear form
                </Button>
              </div>

              {/* SUCCESS MESSAGE */}
              {bookingStatus === "success" && (
                <div
                  id="booking-success"
                  className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center"
                >
                  <div className="mx-auto grid size-12 place-items-center rounded-full bg-green-600 text-white">
                    <Check className="size-7" />
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-green-700">
                    Appointment Confirmed!
                  </h3>

                  <p className="mt-2 text-green-700">
                    Your appointment is booked successfully!
                  </p>

                  <p className="mt-2 text-sm text-green-600">
                    Thank you for choosing Royal Cut Barber
                    Studio.
                  </p>

                  <p className="mt-3 font-semibold text-green-700">
                    Please visit our salon at your selected
                    date and time.
                  </p>

                  <p className="mt-3 text-sm text-green-600">
                    We look forward to seeing you!
                  </p>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {bookingStatus === "error" && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5 text-center">
                  <h3 className="font-bold text-red-700">
                    Unable to book your appointment
                  </h3>

                  <p className="mt-1 text-sm text-red-600">
                    Please check your details and try again.
                  </p>
                </div>
              )}

              {bookingStatus === "idle" && (
                <p className="mt-4 text-xs text-muted-foreground">
                  Your appointment details will be securely
                  saved and your booking will be confirmed on
                  this website.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          className="section-pad"
        >
          <div className="section-shell">
            <SectionTitle
              eyebrow="The Royal Cut finish"
              title="Our work & portfolio"
              sub="Real styles. Precise details. Confident results."
            />

            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="group relative block w-full overflow-hidden rounded-lg bg-navy shadow-lift"
              aria-label="Open gallery"
            >
              <img
                src={galleryImage}
                alt="Collection of Royal Cut haircuts, beard grooming and salon details"
                width={1536}
                height={1536}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-[16/9]"
              />

              <span className="absolute inset-0 grid place-items-center bg-navy/0 transition-colors group-hover:bg-navy/25">
                <span className="translate-y-3 rounded-md bg-background px-5 py-3 font-semibold text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  View portfolio
                </span>
              </span>
            </button>
          </div>
        </section>

        {/* GALLERY DIALOG */}
        <Dialog
          open={galleryOpen}
          onOpenChange={setGalleryOpen}
        >
          <DialogContent className="max-h-[92vh] max-w-5xl overflow-auto p-3">
            <DialogTitle className="sr-only">
              Royal Cut portfolio
            </DialogTitle>

            <DialogDescription className="sr-only">
              Haircuts, beard styling and salon details
            </DialogDescription>

            <img
              src={galleryImage}
              alt="Royal Cut complete haircut and grooming portfolio"
              width={1536}
              height={1536}
              className="w-full rounded-md"
            />
          </DialogContent>
        </Dialog>

        {/* TEAM */}
        <section
          id="team"
          className="section-pad bg-muted"
        >
          <div className="section-shell">
            <SectionTitle
              eyebrow="Masters of the craft"
              title="Meet our expert barbers"
              sub="Skilled professionals, dedicated to your style."
            />

            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={teamImage}
                alt="The four expert barbers at Royal Cut"
                width={1200}
                height={912}
                loading="lazy"
                className="max-h-[560px] w-full object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {barbers.map((b, i) => (
                <article
                  key={b.name}
                  className="rounded-lg border bg-card p-6 shadow-soft"
                >
                  <span className="text-xs font-bold text-gold">
                    0{i + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-bold">
                    {b.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-navy">
                    {b.role}
                  </p>

                  <p className="mt-4 text-xs uppercase text-muted-foreground">
                    {b.exp} · {b.spec}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {b.bio}
                  </p>

                  <div className="mt-5 flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`${b.name} Instagram`}
                    >
                      <Instagram />
                    </Button>

                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`${b.name} Facebook`}
                    >
                      <Facebook />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-pad bg-navy">
          <div className="section-shell">
            <SectionTitle
              eyebrow="Trusted in Jaipur"
              title="What our customers say"
              light
            />

            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map(
                ([quote, name, date]) => (
                  <article
                    key={name}
                    className="rounded-lg bg-card p-7 shadow-soft"
                  >
                    <Quote className="size-9 text-gold" />

                    <div className="mt-4 flex">
                      {[1, 2, 3, 4, 5].map(
                        (x) => (
                          <Star
                            key={x}
                            className="size-4 fill-gold text-gold"
                          />
                        )
                      )}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      “{quote}”
                    </p>

                    <div className="mt-6 border-t pt-5">
                      <strong className="block text-sm">
                        {name}
                      </strong>

                      <span className="text-xs text-muted-foreground">
                        {date}
                      </span>
                    </div>
                  </article>
                )
              )}
            </div>

            <div className="mt-10 text-center text-primary-foreground">
              <p className="mb-4 font-semibold">
                Loved your Royal Cut experience?
              </p>

              <Button variant="gold">
                Write a Google review
              </Button>
            </div>
          </div>
        </section>

        {/* HOURS / INFO */}
        <section className="section-pad bg-muted">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <article className="border-l-4 border-l-gold bg-card p-7 shadow-soft">
              <Clock3 className="mb-5 size-9 text-gold" />

              <h2 className="text-2xl font-bold">
                Opening hours
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                {[
                  ["Monday – Friday", "9:00 AM – 8:00 PM"],
                  ["Saturday", "8:00 AM – 9:00 PM"],
                  ["Sunday", "10:00 AM – 7:00 PM"],
                ].map((x) => (
                  <div
                    key={x[0]}
                    className="flex justify-between gap-4 border-b pb-3"
                  >
                    <span>{x[0]}</span>
                    <strong>{x[1]}</strong>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Emergency appointments calling ahead par available
                hain.
              </p>
            </article>

            <article className="border-l-4 border-l-gold bg-card p-7 shadow-soft">
              <Sparkles className="mb-5 size-9 text-gold" />

              <h2 className="text-2xl font-bold">
                Quick info
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Walk-ins welcome",
                  "Appointments recommended",
                  "Booking available 24/7",
                  "Group rates available",
                  "Free parking",
                  "Safe & hygienic",
                ].map((x) => (
                  <p
                    key={x}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="size-4 text-success" />
                    {x}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* LOCATION */}
        <section className="section-pad">
          <div className="section-shell grid items-stretch gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="eyebrow">Visit the studio</p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Find us in Jaipur
              </h2>

              <div className="mt-7 space-y-2 text-muted-foreground">
                <strong className="block text-lg text-foreground">
                  Royal Cut Barber Studio
                </strong>

                <p>24, C-Scheme, Ashok Marg</p>

                <p>
                  Near Central Park, Jaipur, Rajasthan — 302001
                </p>

                <a
                  className="block text-gold hover:underline"
                  href={`tel:${phone}`}
                >
                  +91 98765 43210
                </a>

                <a
                  className="block text-gold hover:underline"
                  href="mailto:hello@royalcut.demo"
                >
                  hello@royalcut.demo
                </a>

                <p className="pt-2 text-sm">
                  Ample free parking available
                </p>
              </div>

              <Button
                className="mt-7 w-fit"
                variant="gold"
                asChild
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://maps.google.com/?q=C-Scheme+Jaipur"
                >
                  <MapPin />
                  Get directions
                </a>
              </Button>
            </div>

            <iframe
              title="Royal Cut location in C-Scheme Jaipur"
              src="https://maps.google.com/maps?q=C-Scheme%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-80 w-full rounded-lg border-0 shadow-soft lg:h-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section-pad bg-navy text-primary-foreground"
        >
          <div className="section-shell">
            <SectionTitle
              eyebrow="We're here to help"
              title="Get in touch"
              light
            />

            <div className="mb-10 grid gap-4 text-center md:grid-cols-3">
              {[
                [
                  Phone,
                  "Call us",
                  "+91 98765 43210",
                  `tel:${phone}`,
                ],
                [
                  Mail,
                  "Email us",
                  "hello@royalcut.demo",
                  "mailto:hello@royalcut.demo",
                ],
                [
                  MessageCircle,
                  "WhatsApp",
                  "Message us anytime",
                  `https://wa.me/${whatsapp}`,
                ],
              ].map(
                ([Icon, title, text, href]) => {
                  const I = Icon as typeof Phone;

                  return (
                    <a
                      key={String(title)}
                      href={String(href)}
                      className="rounded-lg border border-primary-foreground/15 p-6 transition-colors hover:bg-primary-foreground/5"
                    >
                      <I className="mx-auto size-8 text-gold" />

                      <h3 className="mt-3 font-bold">
                        {String(title)}
                      </h3>

                      <p className="mt-1 text-sm text-primary-foreground/65">
                        {String(text)}
                      </p>
                    </a>
                  );
                }
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSent(true);
                e.currentTarget.reset();
              }}
              className="mx-auto max-w-3xl rounded-lg bg-card p-6 text-card-foreground shadow-lift sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="field-label">
                    Your Name *
                  </span>

                  <Input
                    required
                    placeholder="Enter your full name"
                  />
                </label>

                <label>
                  <span className="field-label">
                    Your Email *
                  </span>

                  <Input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="field-label">
                    Phone Number *
                  </span>

                  <Input
                    required
                    type="tel"
                    placeholder="10-digit number"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="field-label">
                    Message *
                  </span>

                  <Textarea
                    required
                    placeholder="How can we help you?"
                  />
                </label>
              </div>

              <Button
                className="mt-6"
                type="submit"
                size="lg"
                variant="gold"
              >
                Send message
              </Button>

              {contactSent && (
                <p className="mt-4 flex items-center gap-2 text-sm text-success">
                  <Check className="size-4" />
                  Thank you! We'll reply within 2 hours during
                  business hours.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-primary-foreground/10 bg-navy py-12 text-primary-foreground">
        <div className="section-shell grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-extrabold">
              ROYAL <span className="text-gold">CUT</span>
            </p>

            <p className="mt-3 text-sm text-primary-foreground/60">
              Premium Grooming Services
              <br />
              Jaipur, Rajasthan
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Quick links
            </h3>

            {[
              "Home",
              "Services",
              "About",
              "Gallery",
              "Contact",
            ].map((x) => (
              <button
                key={x}
                type="button"
                onClick={() =>
                  scrollTo(x.toLowerCase())
                }
                className="mt-3 block text-sm text-primary-foreground/60 hover:text-gold"
              >
                {x}
              </button>
            ))}
          </div>

          <div>
            <h3 className="font-bold">
              Popular services
            </h3>

            {[
              "Haircuts",
              "Beard Trim",
              "Hair Coloring",
              "Wet Shaving",
              "Massage",
            ].map((x) => (
              <p
                key={x}
                className="mt-3 text-sm text-primary-foreground/60"
              >
                {x}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-bold">
              Connect with us
            </h3>

            <div className="mt-4 flex gap-2">
              <Button
                size="icon"
                variant="heroOutline"
                aria-label="Instagram"
              >
                <Instagram />
              </Button>

              <Button
                size="icon"
                variant="heroOutline"
                aria-label="Facebook"
              >
                <Facebook />
              </Button>

              <Button
                size="icon"
                variant="heroOutline"
                aria-label="YouTube"
              >
                <Youtube />
              </Button>
            </div>

            <p className="mt-5 text-xs leading-6 text-primary-foreground/60">
              Mon–Fri: 9 AM–8 PM
              <br />
              Sat: 8 AM–9 PM · Sun: 10 AM–7 PM
            </p>
          </div>
        </div>

        <div className="section-shell mt-10 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between">
          <p>
            © 2026 Royal Cut. All rights reserved.
          </p>

          <p>
            Privacy · Terms · Demo details
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <Button
        asChild
        size="iconLg"
        variant="whatsapp"
        className="fixed bottom-5 right-5 z-40 shadow-lift"
      >
        <a
          href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment`}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle />
        </a>
      </Button>
    </div>
  );
}