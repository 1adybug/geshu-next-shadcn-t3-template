import type { FC } from "react"

import type { Metadata } from "next"
import Link from "next/link"

import { Brand } from "@/components/Brand"
import { Logout } from "@/components/Logout"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { UserRole } from "@/schemas/userRole"

import { getCurrentUser } from "@/server/getCurrentUser"

export const metadata: Metadata = {
    title: "首页",
}

const Page: FC = async () => {
    const user = await getCurrentUser()

    return (
        <main className="min-h-full bg-muted/30">
            <header className="border-b bg-background">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                    <Brand />
                    <ThemeSwitcher variant="outline" />
                </div>
            </header>
            <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-20 sm:px-6">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle className="text-xl">格数科技项目模板</CardTitle>
                        <CardDescription>用于快速搭建账户、权限、日志与系统设置能力。</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {user ? (
                            <div className="space-y-4">
                                <div className="rounded-2xl bg-muted p-4">
                                    <div className="font-medium">{user.nickname}</div>
                                    <div className="mt-1 text-sm text-muted-foreground">{user.name}</div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Button asChild>
                                        <Link href="/profile">进入个人中心</Link>
                                    </Button>
                                    {user.role === UserRole.管理员 && (
                                        <Button asChild variant="outline">
                                            <Link href="/admin/user">用户管理</Link>
                                        </Button>
                                    )}
                                    <Logout variant="ghost" />
                                </div>
                            </div>
                        ) : (
                            <Button asChild>
                                <Link href="/login">登录系统</Link>
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Page
