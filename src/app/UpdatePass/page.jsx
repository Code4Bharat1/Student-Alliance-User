import React, { Suspense } from "react";
import UpdatePass from "../../components/ForgetPass/UpdatePass";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePass />
    </Suspense>
  );
}
