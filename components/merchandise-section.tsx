"use client"

import { ArrowRight } from "lucide-react"

const products = [
  { id: 1, name: "Official Jersey", category: "Apparel", price: 79.99, isNew: true },
  { id: 2, name: "Championship Tee", category: "Apparel", price: 49.99, isNew: true },
  { id: 3, name: "Limited Hoodie", category: "Apparel", price: 89.99, isNew: false },
  { id: 4, name: "Pro Cap", category: "Accessories", price: 34.99, isNew: false },
  { id: 5, name: "XL Mousepad", category: "Gaming", price: 44.99, isNew: true },
  { id: 6, name: "Collector Scarf", category: "Accessories", price: 29.99, isNew: false },
]

export function MerchandiseSection() {
  return (
    <section id="tienda" className="py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">OFFICIAL STORE</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.9]">
            RL26<br />COLECCIÓN OFICIAL
          </h2>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Mercancia oficial exclusiva de RL26. Lleva contigo estos coleccionables.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative border border-border/20 bg-card/20 overflow-hidden hover-lift transition-all duration-400"
            >
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] tracking-[0.3em] text-foreground/60">NEW</span>
                </div>
              )}

              {/* Image Area */}
              <div className="aspect-square bg-secondary/20 flex items-center justify-center relative">
                <div 
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="w-24 h-24 border border-dashed border-foreground/10 flex items-center justify-center">
                  <span className="text-[9px] tracking-wider text-muted-foreground/50">PRODUCTOS</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[9px] tracking-[0.3em] text-muted-foreground mb-2">
                  {product.category.toUpperCase()}
                </p>
                <h3 className="text-base font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-3">
                  {product.name.toUpperCase()}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">
                    ${product.price}
                  </span>
                  <button 
                    type="button"
                    className="w-8 h-8 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                  >
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 text-foreground text-[13px] tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-400"
          >
            VIEW FULL COLLECTION
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
