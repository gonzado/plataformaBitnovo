import { Container, Form } from "@/components/createPayment";
import { Currency } from "@/components/common/types";
import { getCurrencies } from "@/src/services/payment.service";

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