import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from 'react-redux';
import { icon, polyline } from 'leaflet';
import { planeIcon } from '../utils/constants';
import 'leaflet-rotatedmarker';
import { clearRoute, open } from '../redux/slices/detailSlice';
import { useEffect } from 'react';
import { getFlights } from '../redux/actions';



const Map = () => {
    const dispatch = useDispatch();
    const { flights } = useSelector((store) => store.flight)
    const { route } = useSelector((store) => store.detail)
    useEffect(()=>{
        setInterval(()=>dispatch(getFlights()),10000)
        
    },[])

    return (
        <MapContainer center={[38.908216, 35.424321]} zoom={6} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {flights.map((flight) => (
                <Marker position={[flight.lat, flight.lng]} key={flight.id} icon={planeIcon} rotationAngle={flight.deg -45}>
                    <Popup>
                        <div className='popup'>
                            <span>kod:{flight.code}</span>
                            <button onClick={()=> dispatch(open(flight.id))}>Detay</button>
                            {route.length > 0 && <button onClick={() => dispatch(clearRoute())}>Rotayı Temzile</button>}
                        </div>
                    </Popup>
                </Marker>
            ))}

            {route && <Polyline positions={route}/>}


        </MapContainer>
    )
}

export default Map