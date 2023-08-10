import { Component } from "react";
import PagameTitle from "../../components/PagameTitle";

export class PoliticaPrivacidad extends Component {
  render() {
    return (
      <div className="p-4 text-white max-w-6xl text-justify">
        <div className="flex">
        <h2 className="text-4xl font-bold mb-4 mr-2 right">
          Política de Privacidad de 
        </h2>
        <PagameTitle className="text-4xl"/>
        </div>
        <p className="mb-4 underline text-md">
          Última actualización: [27-07-2023]
        </p>

        <p className="mb-4">
          Bienvenido(a) a Pagame, una aplicación que facilita la división de
          gastos en grupos. En Pagame, nos tomamos muy en serio la privacidad y
          la seguridad de tus datos personales. Esta Política de Privacidad
          tiene como objetivo proporcionarte información transparente sobre cómo
          recopilamos, utilizamos, compartimos y protegemos tus datos. Al
          utilizar nuestra aplicación, aceptas las prácticas descritas en esta
          política.
        </p>

        <h3 className="text-xl font-bold mb-2">
          1. Información que recopilamos:
        </h3>
        <p className="mb-4">
          Para brindarte una experiencia personalizada y funcional, recopilamos
          la siguiente información:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            Información de registro: Al crear una cuenta en Pagame, solicitamos
            información básica, como tu nombre de usuario, dirección de correo electrónico
            y contraseña.
          </li>
          <li>
            Información de transacciones: Al usar la aplicación para compartir
            gastos, recopilamos información sobre las transacciones y los gastos
            compartidos entre los miembros del grupo.
          </li>
          <li>
            Información de contacto: Si decides invitar a otros a unirse a tu
            grupo de Pagame, podemos recopilar información de contacto, como
            nombres y direcciones de correo electrónico.
          </li>
          <li>
            Información del dispositivo: Recopilamos datos técnicos, como la
            dirección IP, el tipo de dispositivo, la versión del sistema
            operativo y la configuración del idioma, para mejorar la calidad y
            seguridad de nuestro servicio.
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2">2. Uso de la información:</h3>
        <p className="mb-4">
          Utilizamos la información recopilada para los siguientes propósitos:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Proporcionar y mejorar nuestros servicios.</li>
          <li>Administrar tu cuenta y brindar soporte al cliente.</li>
          <li>
            Facilitar la división de gastos y mantener un registro de las
            transacciones.
          </li>
          <li>
            Enviar notificaciones relevantes sobre tu actividad en Pagame.
          </li>
          <li>
            Enviar información y promociones relacionadas con nuestra
            aplicación, siempre que hayas dado tu consentimiento previo.
          </li>
        </ul>

        {/* Otras secciones de la política de privacidad */}

        <p className="mb-4">
          Si tienes preguntas o inquietudes sobre nuestra Política de
          Privacidad, no dudes en contactarnos a través de [correo electrónico
          de contacto].
        </p>

        <p className="mb-4">
          Al utilizar Pagame, aceptas los términos y condiciones de esta
          Política de Privacidad. Gracias por confiar en nosotros para facilitar
          tus finanzas en grupo de manera segura y confiable.
        </p>
      </div>
    );
  }
}

export default PoliticaPrivacidad;
