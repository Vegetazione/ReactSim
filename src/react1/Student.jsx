

export default function Students(props) {
  return (
    <div className="flex  flex-col w-1/2 items-center justify-center gap-10  p-10">
      {props.students.map((el) => {
        return (
          <div  key={el.id}>
            <div style={{padding:10, margin:20, width:400 }}
              className={el.gender == "m" ? "bg-blue-400" : "bg-pink-300"}
            >
             <span className="text-3xl p-10 font-extrabold">{el.id}{el.fullname}{el.avg} {el.gender}  </span> 
            </div>
            
          </div>
        );
      })}
 
    </div>
  );
}
