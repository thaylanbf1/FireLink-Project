import {Shield, Zap, Users, Phone, Mail, MapPin, Star} from 'lucide-react';

export const plansData = [
    {
        name:"Básico",
        speed: "100",
        price: "89,90",
        features: ["100 Mega de velocidade", "Wi-Fi 6 Grátis", "Suporte 24H", "Instalação Grátis", "Amazon Prime Incluso"], 
        popular: false
    },
    {
        name: "Pro",
        speed: "300",
        price: "115,69",
        features: ["300 Mega de velocidade", "Wi-Fi 5 e Wi-Fi 6 Grátis", "Suporte 24H", "Instalação Grátis", "Netflix e Amazon Prime Inclusos"],
        popular: true
    },
    {
        name: "Premium",
        speed: "600",
        price: "199,90",
        features: ["600 Mega de velocidade", "Wi-Fi 6 e Wi-Fi 7 Grátis", "Suporte 24H", "Instalação Grátis", "Netflix, Amazon e Disney+ Incluso"],
        popular: false
    }
];

export const AvaliationsData = [
    {
        name: "Maria Silva",
        text: "Melhor internet que ja tive! Velocidade incrivel e suporte disponivel a todo o momento",
        rating: 5,
        location: "Belém, PA"
    },
    {
        name: "João Costa",
        text:"Trabalho home office e preciso de uma conexão sem falhas. Essa foi a melhor empresa que me forneceu uma conexão estavel, recomendo!",
        rating: 5,
        location: "Marituba, PA"
    },
    {
        name: "Paula Castro",
        text: "Preço que cabe no meu bolso e qualidade impecavel. Família toda conectada sem travamentos!",
        rating: 5,
        location: "Ananindeua, PA"
    }
];

export const featureData = [
    {
        icon: Zap,
        title: "Velocidade Máxima",
        description: "Internet Fibra optica com velocidades de até 600 Mega, garantindo straming e dowloads ultrarápidos.",

    },
    {
        icon: Shield,
        title: "Conexão Segura",
        description: "Proteção contra ameaças digitais, mantendo seus dados sempre seguros.",
    },
    {
        icon: Users,
        title: "Suporte 24h",
        description: "Equipe tecnica especializada disponivel 24h po dia, 7 dias da semana para te ajudar no que precisar."
    }
];

export const contactData = [
    {
        icon: Phone,
        title: "Telefone",
        info: "(91) 9 9999-9999"
    },
    {
        icon: Mail,
        title: "E-mail",
        info: "contato@exemplo.com"
    },
    {
        icon: MapPin,
        title: "Localização",
        info: "Ananindeua/PA"
    }
];