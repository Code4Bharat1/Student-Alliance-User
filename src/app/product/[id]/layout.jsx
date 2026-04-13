export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://studentalliancellp.com";
    const res = await fetch(`${baseUrl}/api/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const product = await res.json();
      const name = product?.name || "Product";
      const description =
        product?.description ||
        "Explore this product from Student Alliance LLP - quality educational tools for schools.";
      const image =
        product?.images?.[0] ||
        "https://studentalliancellp.com/images/logo.jpg";

      return {
        title: `${name} | Student Alliance LLP`,
        description,
        alternates: {
          canonical: `https://studentalliancellp.com/product/${id}`,
        },
        openGraph: {
          title: `${name} | Student Alliance LLP`,
          description,
          url: `https://studentalliancellp.com/product/${id}`,
          siteName: "Student Alliance LLP",
          images: [{ url: image, width: 1200, height: 630, alt: name }],
          locale: "en_IN",
          type: "website",
        },
      };
    }
  } catch (_) {}

  return {
    title: "Product | Student Alliance LLP",
    description:
      "Explore educational products from Student Alliance LLP - STEM kits, robotics, digital boards and more.",
    robots: { index: true, follow: true },
  };
}

export default function ProductLayout({ children }) {
  return children;
}
