import { fetchGetCarData } from "../../apis/getCars";
import { CarModel } from "./props";

export const loadCarData = async (
    id: number,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    try {
        const response = await fetchGetCarData(id);
        if (response)
            setCarData(response);
    } catch (error) {
        console.log("Erro ao requisitar a api:", error);
        setCarData(null);
    }
};

export const handlePreviousItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    console.log("Previus: ", carData?.id);
    try {
        if (carData && carData?.id > 1) {
            const response = await fetchGetCarData(carData.id - 1);
            if (response)
                setCarData(response);
        }
    } catch (error) {
        console.log("Erro ao requisitar a api:", error);
        setCarData(null);
    }
};

export const handleNextItem = async (
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    console.log("next: ", carData?.id);
    try {
        if (carData && carData?.id < 10) {
            const response = await fetchGetCarData(carData.id + 1);
            if (response)
                setCarData(response);
        }
    } catch (error) {
        console.log("Erro ao requisitar a api:", error);
        setCarData(null);
    }
};

