
async function page({ params }: { params: { property: string } }) {
    const { property } = await params;
    console.log(property);
  return (
    <main>
        <h1>{property}</h1>
    </main>
  )
}

export default page