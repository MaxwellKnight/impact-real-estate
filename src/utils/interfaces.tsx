export interface NavListProps {
    classes: {
        div: string,
        ul: string,
        li: string
    }
    handleNavClick: () => void
}

export interface ServiceInterface {
    serviceId: number,
    serviceHeading: string,
    serviceIcon: JSX.Element,
    serviceText: string,
    serviceIsActive: boolean,
    serviceDropDownHeading: string,
    serviceDropDownText: string,
    serviceDropDownImg: string,
}
export interface ServiceProps {
    service: ServiceInterface
    handleOnClick: (idx: number) => void
}
export interface ServiceExpandedProps {
    service: ServiceInterface
}

export interface ReasonInterface {
    reasonId: number,
    reasonHeading: string,
    reasonLogo: JSX.Element,
    reasonText: string,
    borderColor: string
}

export interface ReasonProps {
    reason: ReasonInterface
}

export interface ReviewInterface {
    firstName: string,
    lastName: string,
    review: string,
    rating: number
}

export interface FormStateInterface {
    fullName: string,
    email: string,
    phoneNumber: string
}

