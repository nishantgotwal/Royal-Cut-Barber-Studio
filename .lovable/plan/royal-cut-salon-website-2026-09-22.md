## Royal Cut Salon Website

## Goal

Build a complete, mobile-first one-page salon website using temporary demo details, cohesive demo photography, and WhatsApp-based appointment booking.

## What will be built

- Sticky contact bar and responsive navigation with mobile menu
- Full-screen salon banner with booking and call actions
- About, services, transparent pricing, team, gallery, reviews, hours, location, contact, and footer sections
- Appointment form with date, time, barber, service, customer details, and special requests
- WhatsApp booking handoff that formats the completed appointment into a ready-to-send message
- Clickable gallery preview, contact form feedback, phone/email/WhatsApp links, and floating WhatsApp shortcut
- Responsive layouts for phone, tablet, and desktop with accessible controls
- Page title, description, social metadata, and local-business structured information

## Demo content

- Brand: Royal Cut Barber Studio
- Location: Jaipur, Rajasthan
- Temporary phone, email, address, social links, staff names, prices, and hours will be clearly treated as demo details
- Generated visuals will be used for the salon, services, portfolio, team, and reviews

## Visual direction

- Dark navy, warm gold, white, and light gray palette requested in the brief
- Montserrat headings with Open Sans body text
- Premium editorial barber-shop photography, crisp borders, restrained shadows, and focused motion
- No generic gradients or placeholder images

## Technical details

- Implement as the `/` page in the existing TanStack app
- Define all visual colors and effects as semantic tokens in the global design system
- Keep booking entirely client-side and open WhatsApp without storing customer data
- Use runtime date limits to block past dates
- Add unique route metadata and JSON-LD without hardcoding a production domain
- Validate compilation and inspect desktop and mobile renders before completion