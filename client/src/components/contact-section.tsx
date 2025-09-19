"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  productType: z.string().min(1, "Tipo de produto é obrigatório"),
  eventDate: z.string().optional(),
  description: z.string().min(1, "Descrição é obrigatória"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      productType: "",
      eventDate: "",
      description: "",
    },
  });

  useEffect(() => {
    // Registrar campo do select manualmente
    register("productType", { required: true });
  }, [register]);

  const formatMessage = (data: ContactFormData) => {
    return `
*Novo Pedido Donna Onça 🍬*

👤 *Nome:* ${data.name}
📞 *Telefone:* ${data.phone}
📧 *Email:* ${data.email || "-"}
📦 *Produto:* ${data.productType}
📅 *Data do Evento:* ${data.eventDate || "-"}
📝 *Descrição:* ${data.description}
    `;
  };

  const getWhatsAppURL = (data: ContactFormData) => {
    const phoneNumber = "5561986377194"; // Número com DDI (sem +)
    const message = encodeURIComponent(formatMessage(data));
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const onSubmit = (data: ContactFormData) => {
    const whatsappURL = getWhatsAppURL(data);
    window.open(whatsappURL, "_blank");
    reset();
    toast({
      title: "Redirecionando...",
      description: "Seu pedido está sendo enviado via WhatsApp.",
    });
  };

  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl font-bold text-primary mb-4">
            Faça seu Pedido
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato para criar doces únicos para seus momentos
            especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold mb-6">Solicitar Orçamento</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              data-testid="form-contact"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Seu nome completo"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="(61) 98637-7194"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="productType">
                  Produto Principal ou Categoria *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setValue("productType", value, { shouldValidate: true })
                  }
                  value={watch("productType")}
                >
                  <SelectTrigger
                    className={errors.productType ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Selecione o produto principal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leite-ninho">
                      Pasta de Leite Ninho
                    </SelectItem>
                    <SelectItem value="biscoitos">
                      Biscoitos Personalizados
                    </SelectItem>
                    <SelectItem value="brigadeiros">
                      Brigadeiros Gourmet
                    </SelectItem>
                    <SelectItem value="bolos">Bolos Decorados</SelectItem>
                    <SelectItem value="cupcakes">Cupcakes</SelectItem>
                    <SelectItem value="docinhos">Docinhos para Festa</SelectItem>
                    <SelectItem value="tortas">Tortas Doces</SelectItem>
                    <SelectItem value="kit-festa">Kit Festa Completo</SelectItem>
                    <SelectItem value="palha-italiana">Palha Italiana</SelectItem>
                    <SelectItem value="beijinhos">Beijinhos</SelectItem>
                    <SelectItem value="casadinhos">Casadinhos</SelectItem>
                    <SelectItem value="bem-casados">Bem-casados</SelectItem>
                    <SelectItem value="brownies">Brownies</SelectItem>
                    <SelectItem value="cookies-decorados">Cookies Decorados</SelectItem>
                    <SelectItem value="cake-pops">Cake Pops</SelectItem>
                    <SelectItem value="bolo-caseiro">Bolo Caseiro</SelectItem>
                    <SelectItem value="multiplos">Múltiplos Produtos</SelectItem>
                    <SelectItem value="ambos">Vários Produtos</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
                {errors.productType && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.productType.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="eventDate">Data do Evento</Label>
                <Input
                  id="eventDate"
                  type="date"
                  {...register("eventDate")}
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição do Pedido *</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  rows={5}
                  placeholder="Descreva seu pedido com detalhes..."
                  className={errors.description ? "border-destructive" : ""}
                />
                {errors.description && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Enviar Solicitação via WhatsApp
              </Button>
            </form>
          </div>

          {/* Aqui pode manter suas informações de contato e horário, se quiser */}
        </div>
      </div>
    </section>
  );
}
