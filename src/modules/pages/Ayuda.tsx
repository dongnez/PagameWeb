import { Component } from "react";
import PagameTitle from "../../components/PagameTitle";

export class Ayuda extends Component {
  render() {
    return (
      <div className="p-4 text-white max-w-6xl text-justify">
      <div className="flex text-3xl font-bold">
      <h2 className="font-bold mb-4 mr-1.5">¿Necesitas ayuda con </h2>
      <PagameTitle className="text-3xl"/>
      <h2>?</h2>
      </div>
      <h3 className="text-xl font-bold mb-2">¿Qué es Pagame?</h3>
      <p className="mb-4">
        Pagame es una innovadora aplicación que simplifica la división de gastos en grupos. Permite compartir gastos de manera equitativa entre amigos, familiares o compañeros de trabajo, facilitando la administración financiera en cualquier ocasión.
      </p>

      <h3 className="text-xl font-bold mb-2">¿Cómo puedo usar Pagame?</h3>
      <p className="mb-4">
        Para utilizar Pagame, primero debes descargar la aplicación desde Google Play o App Store. Luego, crea una cuenta, invita a tus amigos o familiares a un grupo y empieza a registrar los gastos compartidos. Pagame se encargará de calcular automáticamente quién debe cuánto a quién, ¡sin complicaciones!
      </p>

      <h3 className="text-xl font-bold mb-2">¿Es segura mi información financiera en Pagame?</h3>
      <p className="mb-4">
        Absolutamente. En Pagame, la seguridad de tus datos es nuestra máxima prioridad. Utilizamos tecnología de encriptación avanzada para proteger tu información financiera y garantizar que tus transacciones sean seguras y confidenciales.
      </p>

      <h3 className="text-xl font-bold mb-2">¿Qué dispositivos son compatibles con Pagame?</h3>
      <p className="mb-4">
        Pagame es compatible con dispositivos Android e iOS. Puedes descargar la aplicación desde Google Play o App Store según tu dispositivo.
      </p>

      <h3 className="text-xl font-bold mb-2">¿Puedo acceder a Pagame desde múltiples dispositivos?</h3>
      <p className="mb-4">
        Sí, Pagame está diseñada para que puedas acceder a tu cuenta desde diferentes dispositivos. Solo necesitas iniciar sesión con tus credenciales en cualquier dispositivo compatible y accederás a tus grupos y transacciones registradas.
      </p>

      <h3 className="text-xl font-bold mb-2">¿Qué pasa si alguien no paga su parte?</h3>
      <p className="mb-4">
        Si alguien no paga su parte, Pagame te mostrará el saldo pendiente y podrás recordarles amigablemente. Si es necesario, también puedes agregar el monto pendiente en una transacción futura para mantener un registro preciso de las deudas.
      </p>

      <h3 className="text-xl font-bold mb-2">¿Puedo eliminar un gasto registrado por error?</h3>
      <p>
        Sí, puedes eliminar un gasto registrado por error. Simplemente ve a la sección de transacciones y selecciona el gasto que deseas eliminar. Luego, elige la opción de eliminar y listo.
      </p>
    </div>
    );
  }
}

export default Ayuda;
