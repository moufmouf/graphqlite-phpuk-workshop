<script context="module">
    import queries from './../queries.graphql'

    export async function preload({ params, query }) {
        let data = await queries.company({ "id": params.id });
        return { data };
    }
</script>

<script>
    export let data;
    let company = data.data.data.company;
</script>

<svelte:head>
    <title>Company details</title>
</svelte:head>

<h3>Company { company.name }</h3>

<p>Products sold by { company.name }:</p>

<div class="row">
     {#each company.products as product, j}
     <div class="col-md-4">
         <div class="row">
             <div class="col-3">
                 <img src={"https://i.picsum.photos/id/"+(product.id % 100)+"/50/50.jpg"} alt="" />
             </div>
             <div className="col-9">
                 <strong>{product.name}</strong>
                 <br/>
                 { product.price }€
             </div>
         </div>
     </div>
     {/each}
</div>
