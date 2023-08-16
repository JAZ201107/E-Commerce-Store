import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import getBillboard from "../../actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("e21a70cb-4194-4498-be58-577ebf552d46");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-7 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
