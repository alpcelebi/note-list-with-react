const Navbar = ({notes})=>{
    return (
        <div className="navbar">
            <h1>Note App</h1>
            <p>Toplam {notes.length} adet notunuz mevcut</p>
        </div>
    );

    
}

export default Navbar ;