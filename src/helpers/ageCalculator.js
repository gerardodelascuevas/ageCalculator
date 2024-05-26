export function getAge(date) {
    console.log('fecha recibida ' , date)
    const today = new Date();
    
    // Convertir la fecha de nacimiento a un objeto Date
    const birth = new Date(date);
    
    // Calcular la diferencia en años
    let years = today.getFullYear() - birth.getFullYear();
    
    // Calcular la diferencia en meses
    let months = today.getMonth() - birth.getMonth();
    
    // Calcular la diferencia en días
    let days = today.getDate() - birth.getDate();
    
    // Ajustar los meses y días si es necesario
    if (days < 0) {
        months--;
        const ultimoDiaMesAnterior = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += ultimoDiaMesAnterior;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return {
        años: years,
        meses: months,
        dias: days
    };
}