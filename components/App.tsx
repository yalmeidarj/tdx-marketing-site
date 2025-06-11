'use client';   
import React, { useState, useEffect } from "react";
import {
    Menu,
    X,
    ArrowRight,
    Play,
    Signal,
    Flashlight,
    Home as HomeIcon,
    HeartHandshake,
    UserPlus,
    School,
    Truck,
    BarChart2,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    Star,
} from "lucide-react";

/**
 * -----------------------------------------------------------------------------
 * TDX Solution — Marketing site (multilingual ready, EN copy shown)
 * -----------------------------------------------------------------------------
 *  ✦ 30 000+ homes served • Toronto & Ottawa
 *  ✦ Primary palette kept from original UI (#6BD8DA ➜ #121852 gradient)
 *  ✦ Sections: Hero → Proof‑bar → Services → Process → Case Studies → About →
 *    Contact → Footer
 * -----------------------------------------------------------------------------
 */

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ------------------------------------------------------------------------- */
    /* Dynamic copy blocks                                                       */
    /* ------------------------------------------------------------------------- */
    const services = [
        {
            icon: Signal,
            title: "Telecom & Fibre",
            link: "#",
            description:
                "Boots‑on‑the‑ground teams that convert households to high‑speed internet and fibre packages on a pay‑for‑performance model.",
        },
        {
            icon: Flashlight,
            title: "Energy & Utilities",
            link: "#",
            description:
                "Certified reps who educate residents on energy‑saving upgrades and smart‑meter programmes, driving enrolment and satisfaction.",
        },
        {
            icon: HomeIcon,
            title: "Home‑Service Upgrades",
            link: "#",
            description:
                "From HVAC maintenance to water‑filtration installs, we deliver qualified leads straight to your calendar — no cold calling required.",
        },
        {
            icon: HeartHandshake,
            title: "Non‑profit Campaigns",
            link: "#",
            description:
                "Ethical fundraising and awareness drives that resonate at the door and build long‑term donor relationships for NGOs.",
        },
    ];

    const proofStats = [
        { number: "30 000+", label: "Households Engaged" },
        { number: "12%", label: "Avg. Conversion" },
        { number: "4", label: "Dedicated Field Teams" },
        { number: "2", label: "Core Cities" },
    ];

    const processSteps = [
        {
            icon: UserPlus,
            title: "Recruit",
            text: "We hand‑pick background‑checked reps who fit your brand culture and compliance needs.",
        },
        {
            icon: School,
            title: "Train",
            text: "Role‑play, product deep dives, and objection handling — all tracked via LMS.",
        },
        {
            icon: Truck,
            title: "Deploy",
            text: "Teams roll out across Toronto & Ottawa regions with GPS check‑ins and live scripts.",
        },
        {
            icon: BarChart2,
            title: "Report",
            text: "Real‑time dashboards, daily recaps, and API feeds straight to your CRM.",
        },
    ];

    const caseStudies = [
        {
            company: "FibreCo East",
            problem: "Slow subscriber growth in new roll‑out zones",
            solution:
                "TDX deployed two teams for a 6‑week blitz, tailoring the pitch to neighbourhood internet pain‑points.",
            result: "+1 420 new sign‑ups (14% door‑to‑door conversion) and 96% CSAT.",
        },
        {
            company: "GreenGrid Energy",
            problem: "Low adoption of smart thermostats in detached homes",
            solution:
                "Delivered a demo‑first script and QR‑code instant scheduling for installs.",
            result: "2 300 qualified leads → 880 installs in 8 weeks.",
        },
    ];

    /* ------------------------------------------------------------------------- */
    return (
        <div className="min-h-screen bg-white scroll-smooth">
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#6BD8DA] to-[#121852] bg-clip-text text-transparent">
                            TDX Solution
                        </span>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#home" className="nav-link">
                                    Home
                                </a>
                                <a href="#services" className="nav-link">
                                    Services
                                </a>
                                <a href="#process" className="nav-link">
                                    Process
                                </a>
                                <a href="#cases" className="nav-link">
                                    Case Studies
                                </a>
                                <a href="#about" className="nav-link">
                                    About
                                </a>
                                <a href="#contact" className="nav-link">
                                    Contact
                                </a>
                            </div>
                        </nav>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-[#C9C7C5] hover:text-[#6BD8DA] p-2 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-[#C9C7C5]">
                        {[
                            ["#home", "Home"],
                            ["#services", "Services"],
                            ["#process", "Process"],
                            ["#cases", "Case Studies"],
                            ["#about", "About"],
                            ["#contact", "Contact"],
                        ].map(([href, label]) => (
                            <a
                                key={label}
                                href={href}
                                className="block px-4 py-3 text-base font-medium text-[#1F1B1C] hover:text-[#6BD8DA]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero */}
            <section id="home" className="relative min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#121852] via-[#1e2a5e] to-[#6BD8DA]" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <p className="text-sm tracking-wider uppercase text-[#C9C7C5] mb-4">
                        30 000+ Homes Reached · Toronto & Ottawa
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Door‑to‑Door Sales Teams
                        <span className="block bg-gradient-to-r from-[#6BD8DA] to-[#FCFEFF] bg-clip-text text-transparent">
                            That Deliver Results
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#C9C7C5] max-w-3xl mx-auto leading-relaxed mb-8">
                        TDX Solution provides ethical, data‑driven outreach that turns knocks into
                        customers — across telecom, energy, home‑service and non‑profit sectors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="btn-primary group"
                        >
                            Book a 15‑min Call <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="/brochure.pdf"
                            className="btn-outline group"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                            Download Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* Proof / Stats */}
            <section className="py-16 bg-[#FCFEFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {proofStats.map(({ number, label }) => (
                        <div key={label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[#121852] mb-2">
                                {number}
                            </div>
                            <div className="text-[#6B7280] font-medium">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-sub">General door‑to‑door outreach scaled to your campaign goals.</p>

                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="card group hover:-translate-y-2"
                            >
                                <div className="icon-wrapper group-hover:scale-110">
                                    <Icon className="text-white" size={32} />
                                </div>
                                <h3 className="card-title">{title}</h3>
                                <p className="card-text">{description}</p>
                                <span className="learn-more">
                                    Learn More <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="py-20 bg-[#FCFEFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-sub max-w-2xl mx-auto">
                        A simple, repeatable framework refined over hundreds of campaigns.
                    </p>

                    <div className="mt-16 grid md:grid-cols-4 gap-8">
                        {processSteps.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="flex flex-col items-center text-center">
                                <div className="icon-wrapper mb-6">
                                    <Icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1B1C] mb-2">{title}</h3>
                                <p className="text-[#6B7280] leading-relaxed max-w-xs">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="cases" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Case Studies</h2>
                    <p className="section-sub max-w-2xl mx-auto">
                        Real campaigns, measurable impact.
                    </p>

                    <div className="mt-16 grid md:grid-cols-2 gap-12">
                        {caseStudies.map(({ company, problem, solution, result }) => (
                            <div key={company} className="relative bg-white p-8 rounded-xl shadow-lg">
                                <Star className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#6BD8DA]" size={40} />
                                <h3 className="text-xl font-bold text-[#1F1B1C] mb-4">{company}</h3>
                                <p className="text-[#6B7280] mb-2"><strong>Challenge: </strong>{problem}</p>
                                <p className="text-[#6B7280] mb-2"><strong>Solution: </strong>{solution}</p>
                                <p className="text-[#1F1B1C] font-semibold"><strong>Result: </strong>{result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-20 bg-[#FCFEFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="section-title text-left">Who We Are</h2>
                        <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                            Founded in 2019, TDX Solution has helped partners engage over 30 000
                            households across Toronto and Ottawa. Our mission is to build
                            honest human connections at the doorstep while delivering
                            real‑time, data‑rich results to our clients.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Ethical, permission‑based selling",
                                "Data dashboards updated every 24h",
                                "Background‑checked, insured reps",
                            ].map((item) => (
                                <div key={item} className="flex items-center">
                                    <Star className="text-[#6BD8DA] mr-3" size={20} />
                                    <span className="text-[#1F1B1C]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-[#6BD8DA] to-[#121852] rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-[#C9C7C5] leading-relaxed">
                                To empower brands and communities through respectful
                                door‑to‑door conversations that turn neighbours into loyal
                                customers — all backed by transparent reporting and a
                                pay‑for‑performance ethos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-sub max-w-2xl mx-auto">
                        Ready to boost your next campaign? Book a discovery call today.
                    </p>

                    <div className="mt-16 grid lg:grid-cols-2 gap-16 text-left">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input className="input" placeholder="First name" />
                                <input className="input" placeholder="Last name" />
                            </div>
                            <input className="input" type="email" placeholder="Email" />
                            <textarea className="input h-32 resize-none" placeholder="Tell us about your project" />
                            <button className="btn-primary w-full">Send Message</button>
                        </form>

                        <div className="space-y-8">
                            {[
                                [Phone, "+1 (416) 555‑0134", "Phone"],
                                [Mail, "admin@tdxsolution.com", "Email"],
                                [MapPin, "Toronto · Ottawa", "Service Area"],
                            ].map(([Icon, value, label]) => (
                                <div key={label} className="flex items-start">
                                    <div className="bg-[#6BD8DA]/10 p-3 rounded-lg mr-4">
                                        <Icon className="text-[#6BD8DA]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#1F1B1C] mb-1">
                                            {label}
                                        </h4>
                                        <p className="text-[#6B7280] whitespace-pre-line">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1F1B1C] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#6BD8DA] to-[#C9C7C5] bg-clip-text text-transparent inline-block mb-4">
                                TDX Solution
                            </span>
                            <p className="text-[#C9C7C5] leading-relaxed">
                                Ethical door‑to‑door sales partner serving Toronto & Ottawa.
                                30 000+ households engaged since 2019.
                            </p>
                        </div>

                        {[
                            [
                                "Services",
                                [
                                    "Telecom & Fibre",
                                    "Energy & Utilities",
                                    "Home‑Service Upgrades",
                                    "Non‑profit Campaigns",
                                ],
                            ],
                            ["Company", ["About", "Careers", "Case Studies", "Contact"]],
                            ["Legal", ["Privacy Policy", "Terms of Service"]],
                        ].map(([title, links]) => (
                            <div key={title}>
                                <h5 className="font-semibold mb-4">{title}</h5>
                                <ul className="space-y-2 text-[#C9C7C5]">
                                    {links.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="hover:text-[#6BD8DA] transition-colors">
                                                {l}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-[#C9C7C5]/20 mt-12 pt-8 text-center text-[#C9C7C5]">
                        <p>© 2025 TDX Solution Inc. · All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Utility styles */}
            <style>
                {`
        .nav-link {
          @apply text-[#C9C7C5] hover:text-[#6BD8DA] px-3 py-2 text-sm font-medium transition-colors;
        }
        .btn-primary {
          @apply bg-[#6BD8DA] text-[#121852] px-8 py-4 rounded-lg font-semibold hover:bg-[#5bc5c7] transition-all duration-300 flex items-center justify-center;
        }
        .btn-outline {
          @apply border-2 border-[#6BD8DA] text-[#6BD8DA] px-8 py-4 rounded-lg font-semibold hover:bg-[#6BD8DA] hover:text-[#121852] transition-all duration-300 flex items-center justify-center;
        }
        .section-title {
          @apply text-3xl md:text-5xl font-bold text-[#1F1B1C] mb-4;
        }
        .section-sub {
          @apply text-xl text-[#6B7280];
        }
        .icon-wrapper {
          @apply bg-gradient-to-br from-[#6BD8DA] to-[#121852] w-16 h-16 rounded-lg flex items-center justify-center transition-transform;
        }
        .card {
          @apply bg-white p-8 rounded-xl shadow-lg transition-all duration-300;
        }
        .card-title {
          @apply text-xl font-bold text-[#1F1B1C] mb-4;
        }
        .card-text {
          @apply text-[#6B7280] leading-relaxed;
        }
        .learn-more {
          @apply mt-6 inline-flex items-center text-[#6BD8DA] font-semibold transition-colors;
        }
        .input {
          @apply w-full px-4 py-3 border border-[#C9C7C5] rounded-lg focus:ring-2 focus:ring-[#6BD8DA] focus:border-transparent transition-all;
        }
        `}
            </style>
        </div>
    );
}

export default App;
