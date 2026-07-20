import type { ComponentProps, FC } from "react"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export interface UserData {
    id: string
    name: string
}

export interface UserButtonProps extends Omit<ComponentProps<typeof Button>, "asChild" | "children"> {
    data: UserData
}

export const UserButton: FC<UserButtonProps> = ({ data: { id, name }, ...rest }) => (
    <Button asChild className="h-6 px-2.5" variant="link" size="sm" {...rest}>
        <Link href={`/admin/user?id=${id}`}>{name}</Link>
    </Button>
)
