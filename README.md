# Verde - Duurzame Mode & Schoonheid

Een moderne e-commerce platform voor duurzame mode en natuurlijke schoonheidsproducten, speciaal ontworpen voor de Nederlandse markt.

## Features

- 🌱 **Duurzame Focus**: Gespecialiseerd in eco-vriendelijke en ethisch geproduceerde producten
- 🇳🇱 **Nederlandse Markt**: Geoptimaliseerd voor Nederlandse consumenten met iDEAL betalingen
- 📱 **Responsive Design**: Volledig geoptimaliseerd voor desktop en mobiel
- 🛒 **Complete E-commerce**: Winkelwagen, gebruikersaccounts, bestellingen en betalingen
- 🔐 **Veilig**: NextAuth authenticatie en Stripe betalingsverwerking
- ⚡ **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Prisma

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Neon.tech)
- **Authentication**: NextAuth.js
- **Payments**: Stripe (met iDEAL ondersteuning)
- **Email**: Mailtrap
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon.tech recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/glodinasflexwork/verde-shop.git
cd verde-shop
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your actual values:
- `DATABASE_URL`: Your Neon.tech PostgreSQL connection string
- `NEXTAUTH_SECRET`: A secure random string
- `STRIPE_SECRET_KEY` & `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe keys
- `MAILTRAP_API_TOKEN`: Your Mailtrap API token

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="your-neon-database-url"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# Email
MAILTRAP_API_TOKEN="your-mailtrap-token"
MAILTRAP_API_URL="https://send.api.mailtrap.io/api/send"
EMAIL_FROM="hello@verde.nl"
EMAIL_FROM_NAME="Verde"

# App
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy!

The application will automatically deploy on every push to the main branch.

## Database Schema

The application uses Prisma with PostgreSQL and includes:

- **Users**: Customer accounts with authentication
- **Products**: Product catalog with variants and inventory
- **Categories**: Hierarchical product organization
- **Orders**: Complete order management
- **Cart**: Shopping cart functionality
- **Reviews**: Customer product reviews
- **Addresses**: Customer shipping/billing addresses

## Features Overview

### Customer Features
- Browse sustainable fashion and beauty products
- Advanced product filtering and search
- Shopping cart and wishlist
- Secure checkout with multiple payment options
- User account management
- Order history and tracking
- Product reviews and ratings

### Admin Features
- Product management
- Order management
- Customer management
- Analytics and reporting

### Dutch Market Optimization
- Dutch language support
- iDEAL payment integration
- PostNL shipping integration
- GDPR compliance
- Dutch consumer preferences

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email hello@verde.nl or create an issue on GitHub.

---

**Verde** - Voor een duurzame toekomst 🌱

