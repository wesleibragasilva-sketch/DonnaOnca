import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description:
          "Sua solicitação foi enviada com sucesso. Entraremos em contato em breve!",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description:
          error.message || "Erro ao enviar solicitação. Tente novamente.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
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
          {/* Contact Form */}
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
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p
                      className="text-destructive text-sm mt-1"
                      data-testid="error-name"
                    >
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
                    data-testid="input-phone"
                  />
                  {errors.phone && (
                    <p
                      className="text-destructive text-sm mt-1"
                      data-testid="error-phone"
                    >
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
                  data-testid="input-email"
                />
                {errors.email && (
                  <p
                    className="text-destructive text-sm mt-1"
                    data-testid="error-email"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="productType">Tipo de Produto *</Label>
                <Select
                  onValueChange={(value) => setValue("productType", value)}
                  data-testid="select-product-type"
                >
                  <SelectTrigger
                    className={errors.productType ? "border-destructive" : ""}
                  >
                    <SelectValue placeholder="Selecione o produto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leite-ninho">
                      Pasta de Leite Ninho
                    </SelectItem>
                    <SelectItem value="biscoitos">
                      Biscoitos Personalizados
                    </SelectItem>
                    <SelectItem value="ambos">Ambos</SelectItem>
                  </SelectContent>
                </Select>
                {errors.productType && (
                  <p
                    className="text-destructive text-sm mt-1"
                    data-testid="error-product-type"
                  >
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
                  data-testid="input-event-date"
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição do Pedido *</Label>
                <Textarea
                  id="description"
                  {...register("description")}
                  rows={4}
                  placeholder="Descreva sua necessidade: tema, quantidade, detalhes especiais..."
                  className={errors.description ? "border-destructive" : ""}
                  data-testid="textarea-description"
                />
                {errors.description && (
                  <p
                    className="text-destructive text-sm mt-1"
                    data-testid="error-description"
                  >
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              data-testid="card-contact-info"
            >
              <h3 className="text-xl font-semibold mb-6">
                Informações de Contato Donna Onça
              </h3>
              <div className="space-y-4">
                <div
                  className="flex items-center space-x-4"
                  data-testid="contact-phone"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(61) 98637-7194</p>
                  </div>
                </div>

                <div
                  className="flex items-center space-x-4"
                  data-testid="contact-whatsapp"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">(61) 98637-7194</p>
                  </div>
                </div>

                <div
                  className="flex items-center space-x-4"
                  data-testid="contact-email"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      roseligomes17@gmail.com
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center space-x-4"
                  data-testid="contact-location"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">Brasília-DF</p>
                    <p className="text-sm text-muted-foreground">
                      Entregamos em todo o DF via UBER - Cobramos somente o
                      valor do UBER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              data-testid="card-hours"
            >
              <h3 className="text-xl font-semibold mb-6">
                Horário de Atendimento
              </h3>
              <div className="space-y-3">
                <div
                  className="flex justify-between"
                  data-testid="hours-weekdays"
                >
                  <span>Segunda à Sexta</span>
                  <span className="text-muted-foreground">9h às 17h</span>
                </div>
                <div
                  className="flex justify-between"
                  data-testid="hours-saturday"
                >
                  <span>Sábados</span>
                  <span className="text-muted-foreground">9h às 14h</span>
                </div>
                <div
                  className="flex justify-between"
                  data-testid="hours-sunday"
                >
                  <span>Domingos</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </div>

              <div
                className="mt-6 p-4 bg-muted rounded-lg"
                data-testid="notice-lead-time"
              >
                <p className="text-sm text-muted-foreground">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  Pedidos personalizados: prazo mínimo de 10 Dias
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center" data-testid="social-media">
              <h3 className="text-lg font-semibold mb-4">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-instagram"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-facebook"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-whatsapp-social"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
