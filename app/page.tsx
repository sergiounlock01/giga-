"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Wifi, Tv, Building2, Users, Clock, Shield, Zap, Phone, Mail, MapPin, Check } from "lucide-react"

export default function GigaPlusWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappUrl = "https://wa.me/5511921067609?text=Atendimento."

  const planos = [
    {
      nome: "Giga+ 100MB",
      velocidade: "100 Mbps",
      preco: "R$ 79,90",
      beneficios: ["Wi-Fi grátis", "Instalação gratuita", "Suporte 24h", "Sem fidelidade"],
    },
    {
      nome: "Giga+ 200MB",
      velocidade: "200 Mbps",
      preco: "R$ 99,90",
      beneficios: ["Wi-Fi grátis", "Instalação gratuita", "Suporte 24h", "Netflix incluso", "Sem fidelidade"],
      popular: true,
    },
    {
      nome: "Giga+ 500MB",
      velocidade: "500 Mbps",
      preco: "R$ 149,90",
      beneficios: ["Wi-Fi grátis", "Instalação gratuita", "Suporte 24h", "Netflix + Amazon Prime", "Sem fidelidade"],
    },
    {
      nome: "Giga+ 1GB",
      velocidade: "1 Gbps",
      preco: "R$ 199,90",
      beneficios: ["Wi-Fi grátis", "Instalação gratuita", "Suporte 24h", "Todos os streamings", "Sem fidelidade"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/images/logo-fibra.png" alt="Giga+ Fibra" width={120} height={40} className="h-10 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Planos
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </a>
              <Button onClick={() => window.open(whatsappUrl, "_blank")} className="bg-blue-600 hover:bg-blue-700">
                2ª Via
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">A Fibra que conecta o Brasil</h1>
              <p className="text-xl mb-8 text-blue-100">
                Velocidade, Qualidade e Possibilidades ilimitadas para sua casa e empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  2ª Via de Conta
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/banner-giga.jpg"
                alt="Giga+ Internet"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a Giga+?</h2>
            <p className="text-xl text-gray-600">A melhor internet fibra ótica com total suporte no atendimento</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ultra Velocidade</h3>
              <p className="text-gray-600">Internet fibra ótica com velocidades de até 1GB</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Estabilidade</h3>
              <p className="text-gray-600">Conexão estável 24 horas por dia, 7 dias por semana</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte 24h</h3>
              <p className="text-gray-600">Atendimento especializado a qualquer hora</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sem Fidelidade</h3>
              <p className="text-gray-600">Liberdade total, cancele quando quiser</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Melhores Planos</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para sua necessidade</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planos.map((plano, index) => (
              <Card key={index} className={`relative ${plano.popular ? "border-blue-500 border-2" : ""}`}>
                {plano.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plano.nome}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-blue-600">
                    {plano.preco}
                    <span className="text-sm text-gray-500">/mês</span>
                  </CardDescription>
                  <p className="text-lg font-semibold">{plano.velocidade}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    Contratar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Giga+ Fibra</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/wifi-config.jpg"
                  alt="Configuração Wi-Fi"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <p className="text-gray-600">
                  Internet fibra ótica ultra rápida para sua casa. Configure seu Wi-Fi com facilidade e tenha a melhor
                  conexão.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Tv className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Giga+ TV</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/familia-tv.png"
                  alt="Giga+ TV"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <p className="text-gray-600">
                  Entretenimento completo para toda família. Canais HD, streaming e muito mais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Giga+ Empresas</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/logo-empresas.png"
                  alt="Giga+ Empresas"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 bg-gray-100 p-8"
                />
                <p className="text-gray-600">
                  Soluções corporativas com internet dedicada, suporte especializado e infraestrutura robusta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Total Suporte no Atendimento</h2>
            <p className="text-xl text-gray-600">Estamos aqui para ajudar você 24 horas por dia</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span>(13) 93628-3620</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-green-500 mr-4" />
                  <span>WhatsApp: (13) 93628-3620</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span>contato@gigamais.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
                <p className="text-gray-600">Suporte Técnico: 24h por dia</p>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco Agora</h3>
              <p className="mb-6">Precisa de ajuda? Nossa equipe está pronta para atender você no WhatsApp!</p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Atendimento WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  2ª Via de Conta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo-fibra.png"
                alt="Giga+ Fibra"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400">
                A melhor internet fibra ótica do Brasil. Conectando pessoas e empresas com velocidade e qualidade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Internet Fibra</li>
                <li>Giga+ TV</li>
                <li>Soluções Empresariais</li>
                <li>Suporte Técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: (13) 93628-3620</li>
                <li>Suporte 24h</li>
                <li>2ª Via de Conta</li>
                <li>Central do Cliente</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Giga+ Internet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
