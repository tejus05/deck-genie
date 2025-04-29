import { Card,CardContent,CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CreatePageSkeleton(){
    return(
        <div style="background-color:#121212; color:white; font-family:sans-serif; padding:20px;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <h2 style="color:white;">Projects</h2>
    <button style="background:#333; color:white; border:none; padding:10px 20px; border-radius:5px;">+ New Project</button>
  </div>
  <p style="color:gray;">All of your work in one place</p>

  <div style="display:flex; flex-wrap:wrap; gap:20px; margin-top:20px;">
    <!-- Skeleton cards -->
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
    <div style="width:200px; height:120px; background:#2a2a2a; border-radius:8px;"></div>
  </div>
</div>

    )
}