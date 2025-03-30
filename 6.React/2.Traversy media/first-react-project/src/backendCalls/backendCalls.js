export async function addJob(newJob) {
  const res = await fetch(
    "/api/jobs",

    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newJob),
    }
  )

  return
}

export async function deleteJob(idToDelete) {

  console.log(`trying to delete job ${ idToDelete }`)

  const res = await fetch(
    `/api/jobs/${idToDelete}`,

    {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }
  )

  return
}

export async function updateJob(job) {
  const res = await fetch(
    `/api/jobs/${job.id}`,

    {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body : JSON.stringify(job),
    }
  )

  return
}
