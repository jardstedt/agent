import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface TitlesResponse {
    titles: string[];
}

interface PostTitlesRequest {
    [key: string]: any; // Adjust based on your API's expected request body
}


interface ShippingEstimationItem {
    TitleId?: string;
    Quantity: number;
  }
  
  interface GetShippingOptionsRequest {
    OrderItems: ShippingEstimationItem[];
    Address: Address;
    // Locale: string; // Commented out as in the C# code
  }
  
  interface Address {
    // Define Address properties based on your Address class structure
    // Example assumption:
    Street?: string;
    City?: string;
    StateCode?: string;
    Postcode?: string;
    CountryCode?: string;
  }

  export interface CreateOrderRequest {
  items: CreateOrderRequestItem[];
  address?: Address; // Optional since it's not marked [Required] in C#
  locale: string;
  contactEmail: string;
  shippingLevel: string;
}

export interface CreateOrderRequestItem {
  titleId?: string; // Optional since it's not marked [Required]
  quantity: number;
}


class ApiClient {
    private client: AxiosInstance;

    constructor(baseUrl: string = 'http://localhost:5000/') {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async postTitles(data: PostTitlesRequest): Promise<string[] | null> {
        try {
            const response: AxiosResponse<string[]> = await this.client.get('/titles');
            return response.data;
        } catch (error: any) {
            console.error('Error posting to /titles:', error.message);
            return null;
        }
    }

    async postShippingOptions(data: GetShippingOptionsRequest): Promise<string[] | null> {
        try {
            const response: AxiosResponse<string[]> = await this.client.post('/shippingoptions', data);
            return response.data;
        } catch (error: any) {
            console.error('Error posting to /shippingoptions:', error.message);
            return null;
        }
    }

    async postOrder(data: CreateOrderRequest): Promise<string[] | null> {
        try {
            const response: AxiosResponse<string[]> = await this.client.post('/order', data);
            return response.data;
        } catch (error: any) {
            console.error('Error posting to /shippingoptions:', error.message);
            return null;
        }
    }
}

export default new ApiClient();