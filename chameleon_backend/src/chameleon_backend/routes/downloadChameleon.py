from fastapi import APIRouter
from fastapi.responses import FileResponse
from pydantic import BaseModel

router = APIRouter(prefix="/download", tags=["download"])



@router.get("/chameleonData", 
            response_class=FileResponse,
            summary="Download Chameleon Data",
            )
async def download_chameleon_data() -> FileResponse:
    file_path = "./data/syntheticGeneratedReports1.zip"
    return FileResponse(path=file_path, media_type="application/zip", filename="syntheticGeneratedReports1.zip")
