"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Bio } from "@/components/Bio";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { OfferStack } from "@/components/OfferStack";
import { Modal } from "@/components/ui/Modal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen bg-earth-cream text-foreground-dark selection:bg-earth-clay selection:text-white scroll-smooth">
            <Hero onOpenModal={openModal} />
            <Testimonials />
            <Benefits />
            <Bio />
            <OfferStack onOpenModal={openModal} />
            <FAQ />
            <Footer />

            {/* Global Modal */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="w-full h-[600px] bg-white">
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/4eAISHRayV6UvKBXc0hm?notrack=true"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                            id="inline-4eAISHRayV6UvKBXc0hm"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Formulario Masterclass Abundancia"
                            data-height="545"
                            data-layout-iframe-id="inline-4eAISHRayV6UvKBXc0hm"
                            data-form-id="4eAISHRayV6UvKBXc0hm"
                            title="Formulario Masterclass Abundancia"
                        ></iframe>
                    </div>
                </Modal>
            )}
        </main>
    );
}
