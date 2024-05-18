import { getBillboard } from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0


export default async function HomePage() {
    
    const billboard = await getBillboard("144e92e7-a956-4000-ba7f-ad1a38a1c98d")
    
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}