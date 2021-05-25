import L from 'leaflet'
import { CircleMarker, GeoJSON, Marker } from 'react-leaflet'
import uniqid from 'uniqid'

import settings from '../settings/busSettings'
import user from '../assets/svg/user.svg'

const drawBus = (line, pos) => {
  const [position, bearing] = pos

  return (
    <Marker
      icon={L.icon({
        iconSize: [40, 40],
        iconUrl: settings[line].marker
      })}
      key={uniqid()}
      position={position}
      rotationAngle={-bearing}
      rotationOrigin="center center"
    />
  )
}

const drawRoute = (line) => (
  <GeoJSON
    data={line.route}
    key={uniqid()}
    style={{ color: `#${line.color}33` }}
  />
)

const drawStop = (color, position) => (
  <CircleMarker
    center={position}
    key={uniqid()}
    pathOptions={{ color: `#${color}`, opacity: 0, fillOpacity: 0.66 }}
    radius={5}
  />
)

const drawUser = (position) => (
  <Marker
    icon={L.icon({
      iconSize: [40, 40],
      iconUrl: user
    })}
    position={position}
  />
)

export {
  drawBus, drawRoute, drawStop, drawUser
}
