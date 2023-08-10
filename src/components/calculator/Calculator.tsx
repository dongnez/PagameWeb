import { useEffect,useState } from "react";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import confettiData from "./confetti.json";
// import tickData from "./tick.json";
import PagameTitle from "../PagameTitle";

const Calculator = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountForFirstPerson, setAmountForFirstPerson] = useState(1);
  const [amountForOthers, setAmountForOthers] = useState(0);
  const [results, setResults] = useState<number[]>([]);
  const [individualAmounts, setIndividualAmounts] = useState<number[]>([]);
  const [hasPaid, setHasPaid] = useState<boolean[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // const lottieRef = useRef<LottieRefCurrentProps>(null);
  // const tickRef = useRef<LottieRefCurrentProps>(null);


  type ApiUser = {
    name: string;
    picture: string;
  };
  const [names, setNames] = useState<Array<ApiUser>>([]);

  useEffect(() => {
    // Función para obtener nombres aleatorios en español
    const fetchRandomSpanishNames = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=8&nat=es"
        );
        const data = await response.json();
        // Extraer solo los nombres de la respuesta
        const spanishNames = data.results.map(
          (result: {
            name: { first: string };
            picture: { large: string };
          }) => ({
            name: result.name.first,
            picture: result.picture.large,
          })
        );
        setNames(spanishNames);
      } catch (error) {
        console.error("Error al obtener los nombres aleatorios:", error);
      }
    };

    fetchRandomSpanishNames();
  }, []);

  useEffect(() => {
    if (
      numberOfPeople === 0 ||
      totalAmount === 0 ||
      numberOfPeople > 8 ||
      numberOfPeople < 2
    )
      return;
    const amountFirstPerson = totalAmount / numberOfPeople;
    const calculatedAmountForFirstPerson = totalAmount - amountFirstPerson;
    const calculatedAmountForOthers = totalAmount / numberOfPeople;

    setAmountForFirstPerson(calculatedAmountForFirstPerson);
    setAmountForOthers(calculatedAmountForOthers);

    const updatedResults = Array(numberOfPeople).fill(
      calculatedAmountForOthers
    );
    updatedResults[0] = calculatedAmountForFirstPerson;

    setResults(updatedResults);
    setIndividualAmounts(updatedResults.slice());
    setHasPaid(Array(numberOfPeople).fill(false));
  }, [totalAmount, numberOfPeople]);

  useEffect(() => {
    if (hasPaid[0]) {
      setAmountForFirstPerson((prevAmount) => {
        let updatedAmount = prevAmount;
        individualAmounts.forEach((amount, index) => {
          if (index !== 0 && !hasPaid[index]) {
            updatedAmount -= amount;
          }
        });
        return updatedAmount;
      });
    }
  }, [hasPaid, individualAmounts]);

  const handleCalculate = () => {
    if (numberOfPeople <= 0) {
      notification();
      return;
    }

    if (totalAmount <= 0) {
      notification();
      return;
    }

    const amountFirstPerson = totalAmount / numberOfPeople;
    const calculatedAmountForFirstPerson = totalAmount - amountFirstPerson;
    const calculatedAmountForOthers = totalAmount / numberOfPeople;

    setAmountForFirstPerson(calculatedAmountForFirstPerson);
    setAmountForOthers(calculatedAmountForOthers);

    const updatedResults = Array(numberOfPeople).fill(
      calculatedAmountForOthers
    );
    updatedResults[0] = calculatedAmountForFirstPerson;

    setResults(updatedResults);
    setIndividualAmounts(updatedResults.slice());
    setHasPaid(Array(numberOfPeople).fill(false));
  };

  const handlePay = (index: number) => {
    setIndividualAmounts((prevAmounts) => {
      const updatedAmounts = [...prevAmounts];
      if (index === 0) {
        const paidAmount = Math.max(0, updatedAmounts[index] - amountForOthers);
        updatedAmounts[index] = paidAmount;
      } else {
        const paidAmount = Math.min(
          amountForFirstPerson,
          updatedAmounts[index]
        );
        updatedAmounts[index] -= paidAmount;
        setAmountForFirstPerson((prevAmount) => prevAmount - paidAmount);
      }
      return updatedAmounts;
    });

    setHasPaid((prevPaid) => {
      const updatedPaid = [...prevPaid];
      updatedPaid[index] = true;
      return updatedPaid;
    });
  };

  useEffect(() => {
    if (amountForFirstPerson < 0.001) {
      setAmountForFirstPerson(0.0);
    }
    setShowConfetti(amountForFirstPerson === 0.0);
  }, [amountForFirstPerson]);

  const formatAmount = (amount: number) => {
    return amount.toFixed(2);
  };

/*   const handleConfettiComplete = () => {
    // Cuando se complete la animación, ocultar el confetti
    setShowConfetti(false);
  }; */

  const notification = () => {
    if (numberOfPeople === 0) {
/*       messageApi.open({
        type: "error",
        content: "Ingrese un número válido de personas (mayor que 0).",
      }); */
    }

    if (totalAmount === 0) {
/*       messageApi.open({
        type: "error",
        content: "Ingrese una cantidad válida (mayor que 0).",
      }); */
    }
  };

  return (
    <div className="p-8 rounded-lg text-sm">
      <div className="flex text-3xl justify-center">
        <h1 className="mr-1">¿Cómo funciona </h1>
        <PagameTitle className="text-3xl" />
        <h1>?</h1>
      </div>
      <p className="text-gray-500 mb-4 justify-center flex">
        Ingresa el número de personas y la cantidad total a pagar.
      </p>
      <div className="rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white text-base sm:text-lg">Número de personas:</div>
          <input
            type="number"
            value={numberOfPeople}
            onChange={(e) => {
              let value = Number(e.target.value);
              value = Math.min(8, Math.max(2, value));
              setNumberOfPeople(value);
            }}
            className="text-black px-3 py-2 w-fit sm:w-16 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            max={8}
            min={2}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-base sm:text-lg font-semibold">Cantidad total:</div>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => {
              let value = parseFloat(e.target.value);
              value = Math.min(100000, Math.max(2, value));
              setTotalAmount(value);
            }}
            className="text-black px-3 py-2 w-fit sm:w-32 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            max={100000}
            min={0}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleCalculate}
            className="bg-blue-500 text-white text-base sm:text-lg px-4 py-2 rounded-full hover:bg-blue-600 w-32"
          >
            Calcular
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full bg-black text-white">
              {/* head */}
              <thead className="bg-black text-white border-b border-white">
                <tr>
                  <th className="py-3 px-1 sm:px-4 text-center">
                    <div className="font-bold text-sm sm:text-lg">Nombre</div>
                  </th>
                  <th className="py-3 px-1  sm:px-4 text-center">
                    <div className="font-bold text-sm sm:text-lg">Estado</div>
                  </th>
                  <th className="py-3 px-1 sm:px-4 text-center">
                    <div className="font-bold text-sm sm:text-lg">Cantidad</div>
                  </th>
                  <th className="py-3 px-1 sm:px-4 text-center">
                    <div className="font-bold text-sm sm:text-lg">Acción</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {results.map((_, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-6 sm:w-10 h-fit">
                            <img
                              src={names[index].picture}
                              className="rounded-full"
                              alt={`Avatar ${index + 1}`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-md">
                            {names[index].name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700 pointer-events-none">
                      {amountForFirstPerson !== 0.0 ? (
                        <>
                        </>
                      ) : (
                          <></>
/*                         <Lottie
                          className="pointer-events-none"
                          animationData={tickData}
                          autoPlay={true}
                          lottieRef={tickRef}
                          loop={true}
                          style={{ width: 40, height: 40 }}
                        /> */
                      )}
                    </td>

                    <td className="py-2 px-4 text-right border-b border-gray-700">
                      {hasPaid[index]
                        ? "0.00"
                        : index === 0
                        ? formatAmount(amountForFirstPerson)
                        : formatAmount(individualAmounts[index])}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      {index !== 0 && !hasPaid[index] && (
                        <button
                          className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full"
                          onClick={() => handlePay(index)}
                        >
                          PAGAR
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showConfetti && (
        <div className="fixed inset-0 flex items-center justify-center">
{/*           <Lottie
            lottieRef={lottieRef}
            animationData={confettiData}
            loop={false}
            onComplete={handleConfettiComplete}
          /> */}
        </div>
      )}

    </div>
  );
};

export default Calculator;
