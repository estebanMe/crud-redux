import React, {Fragment, useEffect} from 'react';
import Producto from './Producto';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerProductosAction} from '../actions/productoActions';



const Productos = () => {
    
    const dispatch = useDispatch();
     
    useEffect(() => {
        //consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    }, [dispatch]);

    //Obtener el state
    const productos = useSelector(state => state.productos.productos);

    const error = useSelector(state => state.productos.error);


    const cargando = useSelector(state => state.productos.loading);

    return ( 
         <Fragment>
             <h2 className="text-center my-5">Listado de Productos</h2>
             { error ? <p className="font-weigth-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
             { cargando ? <p className="text-danger">Cargando...</p> : null} 
                    <table className="table table-striped">
                         <thead className="bg-primary table-dark">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                         </thead>
                         <tbody>
                               { productos.lenght === 0 ? 'No hay productos' : (
                                   productos.map(producto => (
                                       <Producto 
                                        key={producto.id}
                                        producto={producto}
                                       />
                                   ))
                               )}
                         </tbody>
                        
                    </table>
         </Fragment>
     );
}
 
export default Productos;