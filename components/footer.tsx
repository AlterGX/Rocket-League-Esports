"use client"

const footerLinks = {
  tournament: [
    { label: "Equipos", href: "#equipos" },
    { label: "Noticias", href: "#sedes" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-8">
              <span className="text-3xl font-[family-name:var(--font-bebas)] tracking-[0.3em] text-foreground">
                RL26
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              La pagina informativa de los Jugadores de Rocket League
              Busca y Analiza los Valores del Mercado.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-sm">
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">Noticias</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  className="flex-1 px-4 py-3 bg-secondary/30 border border-border/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                />
                <button 
                  type="button"
                  className="px-6 py-3 bg-foreground text-background text-[11px] tracking-[0.2em] hover:bg-foreground/90 transition-colors"
                >
                  OK
                </button>
              </div>
            </div>
          </div>

          {/* Tournament Links */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] text-muted-foreground mb-6">MERCADO</h3>
            <ul className="space-y-3">
              {footerLinks.tournament.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

</div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.1em] text-muted-foreground">
            &copy; 2026 RL26 MARKET. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
