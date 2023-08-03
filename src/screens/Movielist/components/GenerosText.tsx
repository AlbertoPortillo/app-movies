export default function GenerosText({generos} : {generos:string[]}) {
  return (
    <p>
        {generos.map((genero:string, index:number) => {
            console.log("🚀 ~ file: GenerosText.tsx:7 ~ {generos.map ~ index:", index)
            if(index >= 1){
                return ` / ${genero}`
            }else{
                return `${genero}`
            }
        	})
        }
    </p>
  )
}
