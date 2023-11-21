import { SidebarNav } from "@/components/sidebar-nav"
import { PiUploadSimpleBold } from "react-icons/pi";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import { getFiles, uploadFile } from "../functions/files";
import { FileObject } from "openai/resources/files.mjs";

export function Sidebar() {
    const [files, setFiles] = useState<FileObject[]>([]);
    const [currentFile, setCurrentFile] = useState<string>("");
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleUpload = () => {
        setIsUploading(e => true);
        async function temp() {
            if (uploadedFile) {
                await uploadFile(uploadedFile)
                setIsUploading(e => false);
                console.log("Uploading file:", uploadedFile);
            }
        }
        temp();
    };

    useEffect(() => {
        let res = getFiles();
        res.then(value => {
            setFiles(value.data);
            console.log(value.data);
            setCurrentFile(value.data[0].id);
        })
    }, [])

    return (
        <div className="w-80 py-2 px-4 bg-white flex flex-col justify-between">
            <div className="mt-4">
                <h3 className="font-bold text-lg mb-3">Uploaded Files</h3>
                {
                    files.length > 0 ? (
                        <SidebarNav
                            items={files.map(
                                each => {
                                    return {
                                        id: each.id,
                                        title: each.filename,
                                    }
                                }
                            )}
                            currentId={files[0].id}
                        />
                    ) : (
                        <></>
                    )
                }
            </div>

            <div className="mb-10">
                <Label htmlFor="picture">Upload Your File</Label>
                <div className="flex gap-2">
                    <Input id="picture" type="file" onChange={handleFileUpload} />
                    <Button className="aspect-square" onClick={handleUpload} disabled={isUploading}>
                        <PiUploadSimpleBold className="text-white" />
                    </Button>
                </div>
            </div>

        </div>
    )
}