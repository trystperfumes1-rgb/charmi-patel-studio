# Design — Charmi Patel Luxury Makeup Artist Portfolio

## Visual Direction
Luxury showcase with maximalist 3D animation. Deep dark background (#0a0a13, L 0.08) with vibrant magenta-pink accents (#e35fa3, L 0.60 C 0.25 H 340°). Rose gold highlights, ethereal lavender glows. Glassmorphism cards, blurry atmospheric effects. Premium serif headlines (Fraunces) + modern geometric sans body (Space Grotesk).

## Palette
| Token              | OKLCH           | RGB Approx      | Purpose                    |
| :----------------- | :-------------- | :-------------- | :------------------------- |
| `--primary`        | 0.60 0.25 340   | #E35FA3         | Magenta-pink accent, CTA   |
| `--secondary`      | 0.65 0.18 55    | #D4A574         | Rose gold, luxury highlight |
| `--accent`         | 0.70 0.12 280   | #B3B4FF         | Lavender glow, ethereal    |
| `--background`     | 0.08 0 0        | #0A0A13         | Deep dark neutral base      |
| `--foreground`     | 0.95 0 0        | #F2F2F2         | Near white, pristine text  |
| `--card`           | 0.12 0.05 300   | #1A1326         | Dark card with magenta tint |
| `--border`         | 0.20 0.08 300   | #332636         | Subtle dark magenta divider |
| `--muted`          | 0.20 0.08 300   | #332636         | Muted elements, low contrast |
| `--destructive`    | 0.55 0.24 25    | #DD4C52         | Warning/error state        |

## Typography
| Layer     | Font              | Size   | Weight   | Use                        |
| :-------- | :---------------- | :----- | :------- | :------------------------- |
| Display   | Fraunces (serif)  | 32-56  | 400-700  | Headline, art-directed     |
| Body      | Space Grotesk     | 14-18  | 400-500  | Paragraph, UI text         |
| Mono      | JetBrains Mono    | 12-14  | 400      | Code, metadata             |

## Structural Zones
| Zone              | Background            | Border         | Shadow/Glow           | Purpose                      |
| :---------------- | :-------------------- | :------------- | :-------------------- | :--------------------------- |
| Header/Nav        | `bg-background/40`    | `border-b`     | None                  | Floating nav with blur       |
| Hero Section      | `bg-background`       | None           | Multiple blur orbs    | Hero with 3D particles, photo |
| Content Cards     | `.glassmorphism`      | `glassy-border` | `.glow-pink` hover    | Portfolio, testimonials      |
| Section Headers   | Transparent           | `border-b`     | None                  | H2, divider, breathing      |
| Footer            | `bg-muted/20`         | `border-t`     | None                  | Contact, info, links        |
| Floating Buttons  | `.glow-pink`          | None           | `.glow-pink`          | WhatsApp (right), IG (left) |

## Signature Animations
- **Float**: Elements rise/sink 10px, 3s ease-in-out infinite — portfolio cards, hero testimonials
- **Glow Pulse**: Glow intensity fades 0.3–0.6 opacity, 2s ease-in-out infinite — accent borders, button halos
- **Fade In Up**: 0 → 1 opacity + 20px translateY, 0.6s ease-out — section enter on scroll
- **3D Particles**: React Three Fiber background, floating animated geometry, ethereal motion path
- **Hover Glow**: Box-shadow magenta halo on card/button hover, 0.3s smooth transition

## Glassmorphism & Glow Details
- **Card Base**: `rgba(255,255,255,0.05)` background + `backdrop-blur-2xl` + `border 1px rgba(224, 95, 163, 0.15)`
- **Glow Pink**: `box-shadow 0 0 20px rgba(224, 95, 163, 0.4), 0 0 40px rgba(224, 95, 163, 0.2)`
- **Blur Orbs**: Pseudo-elements with `filter blur(80px)`, `opacity 0.3`, positioned absolute, `pointer-events-none`
- **Text Gradient**: `linear-gradient(135°, primary, secondary)` with `-webkit-background-clip: text`

## Layout & Spacing
- **Mobile First**: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px` breakpoints
- **Base Radius**: `0.625rem` (12px) — rounded modern feel
- **Density**: Premium breathing room (1.5–2rem section gap), card padding 1.5–2rem
- **Grid**: 12-col responsive grid for portfolio, 2–3 cols mobile, 3–4 cols tablet, 4 cols desktop

## Interactive States
- **Hover**: Glow-pink shadow, slight scale (1.02), 0.3s smooth
- **Active**: Primary text color, glow-accent shadow
- **Disabled**: Opacity 0.5, no glow, cursor-not-allowed
- **Focus**: Ring-primary 2px offset 2px, glow-accent

## Dark Mode
- **Forced**: Always dark (no light mode). All tokens use dark palette only.
- **Contrast**: L diff ≥0.75 (foreground on background), L diff ≥0.50 (foreground on card)

## Emotional Tone
Luxury, refined, ethereal, sophisticated, premium. No bold neon. Magenta is sophisticated, rose gold is warm-elegant, lavender is ethereal-dreamy. Blurry glows feel contemporary, not retro. Glassmorphism adds premium glass-like depth.
