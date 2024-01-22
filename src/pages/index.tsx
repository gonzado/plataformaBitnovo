import { Container, Form } from "@/components/create-payment";
import { Currency } from "@/types";
import { getCurrencies } from "@/services/payment.service";

interface Props {
    readonly data: Currency[];
}

export default function Home({ data }: Props) {

    return (
        <Container title="Crear pago">
            <Form currencies={data} />
        </Container>
    );
}

export async function getServerSideProps() {
    const data = await getCurrencies();

    return {
        props: { data },
    };
}